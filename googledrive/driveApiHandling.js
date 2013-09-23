

/*************************************************
* Load the Drive API client.
* @param {Function} callback Function to call when the client is loaded.
************************************************/
function loadClient(callback) {
gapi.client.load('drive', 'v2', callback);
}


/*************************************************
 * Get file.
 * @param {String} fileId ID of the file to get.
************************************************/
var file;
function getFile(fileId) {
	request = gapi.client.drive.files.get({
    	'fileId': fileId
	});
	request.execute(function(resp) {
		file = request.execute(function(inp){file = inp;});
	});
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
  });
}


/*************************************************
 * Download a file's content.
 * @param {File} file Drive File instance.
 * @param {Function} callback Function to call when the request is complete.
************************************************/
function downloadFile(file, callback) {
  if (file.downloadUrl) {
    var accessToken = gapi.auth.getToken().access_token;
    var xhr = new XMLHttpRequest();
    xhr.open('GET', file.downloadUrl);
    xhr.setRequestHeader('Authorization', 'Bearer ' + accessToken);
 /*   xhr.onload = function() {
      callback(xhr.responseText);
    };
    xhr.onerror = function() {
      callback(null);
    };*/
    xhr.send();
  } else {
    callback(null);
  }
}


/*************************************************
* Get the metadata of the file
* @param {String} fileId ID of the file to print metadata for.
************************************************/
var fileMetadata;
function getMetadata(fileId) {
	fileMetadata = gapi.client.drive.files.get({
    	'fileId': fileId
	});
}
	


var dta;
function getLocalFile() {
    xhr = new XMLHttpRequest();
    xhr.open('GET', "./data.txt");
    xhr.send();
}

var fileData = "this is the new textthis is the new text"




/*************************************************
 * Update an existing file's metadata and content.
 * @param {String} fileId ID of the file to update.
 * @param {Object} fileMetadata existing Drive file's metadata.
 * @param {File} fileData File object to read data from.
 * @param {Function} callback Callback function to call when the request is complete.
************************************************/
function updateFile(fileId, fileMetadata, fileData, callback) {
  const boundary = '-------314159265358979323846';
  const delimiter = "\r\n--" + boundary + "\r\n";
  const close_delim = "\r\n--" + boundary + "--";
  var reader = new FileReader();
  reader.readAsBinaryString(fileData);
  reader.onload = function(e) {
    var contentType = fileData.type || 'application/octet-stream';
    // Updating the metadata is optional and you can instead use the value from drive.files.get.
    var base64Data = btoa(reader.result);
    var multipartRequestBody =
        delimiter +
        'Content-Type: application/json\r\n\r\n' +
        JSON.stringify(fileMetadata) +
        delimiter +
        'Content-Type: ' + contentType + '\r\n' +
        'Content-Transfer-Encoding: base64\r\n' +
        '\r\n' +
        base64Data +
        close_delim;
    var request = gapi.client.request({
        'path': '/upload/drive/v2/files/' + fileId,
        'method': 'PUT',
        'params': {'uploadType': 'multipart', 'alt': 'json'},
        'headers': {
          'Content-Type': 'multipart/mixed; boundary="' + boundary + '"'
        },
        'body': multipartRequestBody});
    if (!callback) {
      callback = function(file) {
        console.log(file)
      };
    }
    request.execute(callback);
  }
}





