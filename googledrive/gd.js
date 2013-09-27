var editor, gpx, gapi, store, proxy;
var filecontent;

var CLIENT_ID = '170396995102.apps.googleusercontent.com';
var SCOPES = 'https://www.googleapis.com/auth/drive';
var FILE_ID = "0B4tksUtG91iOY0xIdUY2SmROSEk";
var file_id = FILE_ID;
var apiKey = 'AIzaSyDdFle73cKd_ibyCRZgoxGtcGVFTpiKM48'; 


/*
if (window.location.protocol != 'https:') {
  window.location.href = 'https:' + window.location.href.substring(window.location.protocol.length);
}
*/


/******************************************************************
 * Check if the current user has authorized the application.
*******************************************************************/

function handleClientLoad() {
  window.setTimeout(checkAuth, 1);
  console.log('handleClientLoad');

}


/******************************************************************
 * Check if the current user has authorized the application.
*******************************************************************/

function checkAuth() {
  gapi.client.load('drive', 'v2');
  console.log('Authenyytication 1');
  gapi.auth.authorize({
    'client_id': CLIENT_ID,
    'scope': SCOPES,
    'immediate': false
  }, handleAuthResult);
}


/******************************************************************
 * Called when authorization server replies.
 * @param {Object} authResult Authorization result.
*******************************************************************/
function handleAuthResult(authResult) {
//    extAuthButton  = Ext.ComponentQuery.query('button[action=login]')[0]
      authButton = Ext.getElementById('login');

  if (authResult && !authResult.error) {
	// Access token has been successfully retrieved, requests can be sent to the API.
	console.log("Authentication successfull");
//	if (extAuthButton.getText() == 'Anmelden'){ 
//	  	extAuthButton.setText('Abmelden von Google');
//	}
  getFileById(FILE_ID);
  } 

  else  {
    // No access token could be retrieved, show the button to start the authorization flow.
//  authButton.style.display = 'block';
	console.log('Authenyytication not successfull');
    authButton.onclick = function() {
    console.log('Authenyytication 2');
	    gapi.auth.authorize({
        'client_id': CLIENT_ID,
        'scope': SCOPES,
        'immediate': false
      }, handleAuthResult);
    }; 
  }

}


/*************************************************
 * Update an existing file's metadata and content.
 * @param {String} fileId ID of the file to update.
 * @param {Object} fileMetadata existing Drive file's metadata.
 * @param {File} fileData File object to read data from.
 * @param {Function} callback Callback function to call when the request is complete.
************************************************/

function updateFileMetadata(file) {
  var metadata = document.getElementById('metadata');
  var date = new Date(file.modifiedDate);

  console.log("Last modified by: " + file.lastModifyingUserName);
  console.loge("on: " + date.toLocaleString());
}

function updateFile(fileId, fileMetadata, callback) {
  const boundary = '-------314159265358979323846';
  const delimiter = "\r\n--" + boundary + "\r\n";
  const close_delim = "\r\n--" + boundary + "--";

  fileId = FILE_ID;
  var metadata = fileMetadata || {
    'title': 'aapdata.json',
    'mimeType': contentType,
    'editedBy': 'roger'
  };

  var contentType = 'application/octect-stream';
  // Updating the metadata is optional and you can instead use the value from drive.files.get.
  var base64Data = btoa(editor.getValue()); //btoa(reader.result);
  var multipartRequestBody = delimiter + 'Content-Type: application/json\r\n\r\n' + JSON.stringify(metadata) + delimiter + 'Content-Type: ' + contentType + '\r\n' + 'Content-Transfer-Encoding: base64\r\n' + '\r\n' + base64Data + close_delim;

  var request = gapi.client.request({
    'path': '/upload/drive/v2/files/' + fileId,
    'method': 'PUT',
    'params': {
      'uploadType': 'multipart',
      'alt': 'json'
    },
    'headers': {
      'Content-Type': 'multipart/mixed; boundary="' + boundary + '"'
    },
    'body': multipartRequestBody
  });
  if (!callback) {
    callback = function(file) {
      updateFileMetadata(file);
    };
  }
  request.execute(callback);

}

/*************************************************
 * Get file.
 * @param {String} fileId ID of the file to get.
************************************************/
function getFileById(fileId) {

  var callback = function(file, callback) {
//      updateFileMetadata(file);
      downloadFile(file.downloadUrl, function(content) {
		  storeData = JSON.parse(content);
		  Aap.util.Data.loadNewData(storeData);
      });
    }

  var request = gapi.client.request({
    'path': '/drive/v2/files/' + fileId,
    'method': 'GET'
  });

  request = gapi.client.drive.files.get({
    'fileId': fileId
  });

return(request.execute(callback));

}



function downloadFile(downloadUrl, callback) {
  if (downloadUrl) {
    var accessToken = gapi.auth.getToken().access_token;
    var xhr = new XMLHttpRequest();
    try {
      xhr.open('GET', downloadUrl);
    } catch (e) {
      alert(e + '\nYou need to allow your browser to make cross-domain requests if you want to load GPX files.\n' + '\nThis is usually done on IE7, IE8, and IE9 just go to Settings->Internet Options->Security->Custom Level and change security settings under "Miscellaneous" set "Access data sources across domains" to "Enable"' + '\n\nOther browsers, including IE10 are doing fine.');
    }
    xhr.setRequestHeader('Authorization', 'Bearer ' + accessToken);
    xhr.onload = function() {
      callback(xhr.responseText);
    };
    xhr.onerror = function() {
      callback(null);
    };
    xhr.send();
  } else {
    callback(null);
  }
}



function init() {
  editor = ace.edit("editor");
  editor.getSession().setMode("ace/mode/javascript");

//  handleClientLoad();

} 
