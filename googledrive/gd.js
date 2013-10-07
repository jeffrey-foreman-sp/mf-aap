var editor, gpx, gapi, store, proxy;
var filecontent;
var CLIENT_ID = '979206817784.apps.googleusercontent.com';
var SCOPES = 'https://www.googleapis.com/auth/drive';
var FILE_ID = '0B4g6WzbdesdQWnA3c0xza0N5a2c';
var file_id = FILE_ID;
var apiKey = 'AIzaSyAJvc8kG5CyJkeFAA1OM5X874rN8VmE-mY'; 
var downloadUrl = 'https://docs.google.com/uc?id=0B4tksUtG91iOY0xIdUY2SmROSEk&export=download'; 

/*
if (window.location.protocol != 'https:') {
  window.location.href = 'https:' + window.location.href.substring(window.location.protocol.length);
}
*/


/******************************************************************
 * Check if the current user has authorized the application.
*******************************************************************/
function gapiLoad() {
	gapi.client.load('drive', 'v2');
	gapi.client.setApiKey(apiKey);
}


/******************************************************************
 * Check if the current user has authorized the application.
*******************************************************************/
function handleClientLoad() {
//  window.setTimeout('checkAuthImmediate(handleAuthResult)', 1);
  window.setTimeout('checkAuthImmediate(getHandleFunction("download"))', 1);
}


/******************************************************************
 * Check if the current user has authorized the application.
*******************************************************************/
function checkAuth(callback) {
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
  gapi.auth.authorize({
    'client_id': CLIENT_ID,
    'scope': SCOPES,
    'immediate': true
  }, callback);
}


/*************************************************
 * Logout from google account
 * @param {String} fileId ID of the file to print metadata for.
************************************************/
function googleLogout() {
	window.open("https://accounts.google.com/Logout?&continue=http://www.google.com/", '_blank');
	Ext.getCmp('login').toggle(false);
}


/******************************************************************
 * Called when authorization server replies 
 * @param {Object} authResult Authorization result.
 * @param {Object} type name of the function that should be called.
*******************************************************************/
function getHandleFunction(type) {
	var postSuccess = function() {};
	if (type === 'download') {
		postSuccess = function() {
			loadFile(file_id);	
		};
	}
	
	return function(authResult) {
			if (authResult && !authResult.error) {
				// Access token has been successfully retrieved, requests can be sent to the API.
				Ext.getCmp('login').toggle(true);
				Ext.getCmp('login').setText('Abmelden');
				Ext.getCmp('toggleedit').show(true);
				postSuccess();
			} 
			else  {
				// No access token could be retrieved, show the button to start the authorization flow.
				if (Ext.getCmp('login').pressed==true){
					Ext.getElementById('login') = function() {
						gapi.auth.authorize({
							'client_id': CLIENT_ID,
							'scope': SCOPES,
							'immediate': false
						}, handleAuthResult);
					}; 
				}	
			}
	}
}

/******************************************************************
 * Called when authorization server replies.
 * @param {Object} authResult Authorization result.
*******************************************************************/
function handleAuthResult(authResult) {
	if (authResult && !authResult.error) {
		// Access token has been successfully retrieved, requests can be sent to the API.
		Ext.getCmp('login').toggle(true);
		Ext.getCmp('login').setText('Abmelden');
		Ext.getCmp('toggleedit').show(true);
 	} 
	else  {
	    // No access token could be retrieved, show the button to start the authorization flow.
	   	if (Ext.getCmp('login').pressed==true){
			Ext.getElementById('login').onclick  = function() {
			    gapi.auth.authorize({
	    			'client_id': CLIENT_ID,
	    	  		'scope': SCOPES,
	 			    'immediate': false
  	    		}, handleAuthResult);
  			}; 
		}	
	}
}


/*************************************************
* Retrieve a list of permissions.
* @param {String} fileId ID of the file to retrieve permissions for.
* @param {Function} callback Function to call when the request is complete.
************************************************/
function retrievePermissions(fileId, callback) {
	var request = gapi.client.drive.permissions.list({
		'fileId': fileId
	});
	var test;
	request.execute(function(resp) {
		test = resp.items;
		callback(resp.items);
		console.log(resp.items);
	});
	console.log(r3);
	return test;
}

function storePermissions(r)  {
	testvar = r;
	console.log(r);
	return r;
}


/*************************************************
 * Print information about the current user along with the Drive API
 * settings.
/*************************************************/
function printAbout() {
  var request = gapi.client.drive.about.get();
  request.execute(function(resp) {
    console.log('Current user name: ' + resp.name);
    console.log('Root folder ID: ' + resp.rootFolderId);
    console.log('Total quota (bytes): ' + resp.quotaBytesTotal);
    console.log('Used quota (bytes): ' + resp.quotaBytesUsed);
    console.log('Is authenticated user: ' + resp.user.isAuthenticatedUser);
    console.log('Additional role info: type: ' + resp.additionalRoleInfo.type);
  });
}    


/*************************************************
 * Get file for view only
 *  (does not require login)
************************************************/
function getDataLoggedIn() {
	console.log('It should now load the data');
}


/*************************************************
 * Update an existing file's metadata and content.
 * @param {String} fileId ID of the file to update.
 * @param {Object} fileMetadata existing Drive file's metadata.
 * @param {File} fileData File object to read data from.
 * @param {Function} callback Callback function to call when the request is complete.
************************************************/
function updateFileMetadata(file) {
  var date = new Date(file.modifiedDate);
}

function updateFile(fileId, /* fileMetadata,*/ fileData, callback) {
  var boundary = '-------314159265358979323846';
  var delimiter = "\r\n--" + boundary + "\r\n";
  var close_delim = "\r\n--" + boundary + "--";

  fileId = FILE_ID;
  var  metadata = /*fileMetadata ||*/ {
    'title': 'aapdata.json',
    'editedBy': '',
    'mimeType': contentType
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
function loadFile(fileId) {

  var callback = function(file, callback) {
//      updateFileMetadata(file);
  		downloadedFile = file;
	    downloadFile(file.downloadUrl, function(content) {
		  var storeData = JSON.parse(content);
		  Aap.util.Data.loadDataToTree(storeData);
        });
    }
  var request = gapi.client.drive.files.get({
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


