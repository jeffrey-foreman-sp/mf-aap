var editor, gpx, gapi, store, proxy;
var filecontent;

var CLIENT_ID = '170396995102.apps.googleusercontent.com';
var SCOPES = 'https://www.googleapis.com/auth/drive';
//var FILE_ID = "0B4tksUtG91iOVHVaSFZQQ2VfOW8";
var FILE_ID = '0B4tksUtG91iON3lLSFpZQU1BdVk';

var file_id = FILE_ID;
var apiKey = 'AIzaSyDdFle73cKd_ibyCRZgoxGtcGVFTpiKM48'; 

var downloadUrl = 'https://docs.google.com/uc?id=0B4tksUtG91iOY0xIdUY2SmROSEk&export=download'; 

/*
if (window.location.protocol != 'https:') {
  window.location.href = 'https:' + window.location.href.substring(window.location.protocol.length);
}
*/

//gapi.client.setApiKey(apiKey);




/*************************************************
* Load the Drive API client.
* @param {Function} callback Function to call when the client is loaded.
************************************************/
/*
function loadClient(callback) {
gapi.client.load('drive', 'v2', callback);
}
*/


/******************************************************************
 * Check if the current user has authorized the application.
*******************************************************************/
function handleClientLoad() {
  console.log('handleClientLoad');
  window.setTimeout('checkAuth(handleAuthResult)', 1);
}


/******************************************************************
 * Check if the current user has authorized the application.
*******************************************************************/
function checkAuth(callback) {
  gapi.client.load('drive', 'v2');
  console.log('Authenyytication 1');
  gapi.auth.authorize({
    'client_id': CLIENT_ID,
    'scope': SCOPES,
    'immediate': false
  }, callback);
}


/******************************************************************
 * Check if the current user has authorized the application without showing UI.
*******************************************************************/
function checkAuthImmediate(callback) {
  gapi.client.load('drive', 'v2');
  console.log('Authenyytication 2');
  gapi.auth.authorize({
    'client_id': CLIENT_ID,
    'scope': SCOPES,
    'immediate': true
  }, callback);
}


/*************************************************
 * Print a file's metadata.
 * @param {String} fileId ID of the file to print metadata for.
************************************************/
function googleLogout() {
/*	function newWindow(newContent)  {
		winContent = window.open(
			newContent,
			'nextWin',
			width=150,
			height=150,
			toolbar=1,
			scrollbars=1,
			resizable=1
		);
		winContent.focus();
	}
	newWindow("https://accounts.google.com/Logout?&continue=http://www.google.com/");
*/
	window.open("https://accounts.google.com/Logout?&continue=http://www.google.com/", '_blank');
	Ext.getCmp('login').toggle(false);
}


/******************************************************************
 * Called when authorization server replies.
 * @param {Object} authResult Authorization result.
*******************************************************************/
function handleAuthResult(authResult) {
	extAuthButton  = Ext.ComponentQuery.query('button[action=login]')[0]
	authButton = Ext.getElementById('login');

	if (authResult && !authResult.error) {
		// Access token has been successfully retrieved, requests can be sent to the API.
		console.log("Authentication successfull");
		Ext.getCmp('login').toggle(true);
		Ext.getCmp('toggleedit').show(true);
		downloadFileById(file_id) 
 	} 

	else  {
	    // No access token could be retrieved, show the button to start the authorization flow.
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
 * Print a file's metadata.
 * @param {String} fileId ID of the file to print metadata for.
************************************************/
function printFile(fileId) {
  var request = gapi.client.drive.files.get({
    'fileId': fileId
	});
  request.execute(function(resp) {
    console.log('Title: ' + resp.title);
    console.log('ID: ' + resp.id);
    console.log('Description: ' + resp.description);
    console.log('MIME type: ' + resp.mimeType);
    console.log('Download URL: ' + resp.downloadUrl);
    console.log('Web Content Link: ' + resp.webContentLink);
    console.log("Last modified by: " + resp.lastModifyingUserName);
  });
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
}

function updateFile(fileId, /* fileMetadata,*/ fileData, callback) {
  var boundary = '-------314159265358979323846';
  var delimiter = "\r\n--" + boundary + "\r\n";
  var close_delim = "\r\n--" + boundary + "--";


  fileId = FILE_ID;
  var  metadata = /*fileMetadata ||*/ {
    'title': 'aapdata.json',
    'mimeType': contentType,
    'editedBy': 'roger'
  };


  var contentType = 'application/octect-stream';
  // Updating the metadata is optional and you can instead use the value from drive.files.get.
  var base64Data = btoa(fileData); //btoa(reader.result);
  var multipartRequestBody = 
	delimiter 
	+ 'Content-Type: application/json\r\n\r\n' 
	+ JSON.stringify(metadata) 
	+ delimiter 
	+ 'Content-Type: ' 
	+ contentType 
	+ '\r\n' 
	+ 'Content-Transfer-Encoding: base64\r\n' 
	+ '\r\n' 
	+ base64Data 
	+ close_delim;

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
function downloadFileById(fileId) {

  var callback = function(file, callback) {
//      updateFileMetadata(file);
  		downloadedFile = file;
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

/*************************************************
 * Download a file's content.
 * @param {File} file Drive File instance.
 * @param {Function} callback Function to call when the request is complete.
************************************************/
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


/*************************************************
 * init function
************************************************/
/*
function init() {
}
*/
