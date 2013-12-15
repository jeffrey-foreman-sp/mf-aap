var url = 'http://mf-aap.dev.bgdi.ch/data/export';
var PADDING = 5;
var attributes = ['name', 'id', 'parentId', 'erfass', 'bemerk', 'leaf', 'metanode', 'inherited', 'path', 'level'];


function pad(string, length, pad_char) {
    string = string.toString();
    length = parseInt(length) || 1;
    pad_char = pad_char || ' ';
    var arr = new Array(length);
    var pad_str = arr.join(pad_char);
    return pad_str + string;
};

function readRows() {
    var sheet = SpreadsheetApp.getActiveSheet();
    var rows = sheet.getDataRange();
    var numRows = rows.getNumRows();
    var values = rows.getValues();
    Browser.msgBox("Bitte warte, daten werden neu eingelesen");
    var response = UrlFetchApp.fetch(url);
    var json = response.getContentText();
    var data = JSON.parse(json);
    var results = data.data; 
    var numRes = data['length'];

    var cell = sheet.getRange('a1');
    var col = 5;
    var values = []
    for (var i = 0; i <= numRes - 1; i++) {

        var row = results[i];
        var level = row.level;
        level = level - 2;
        if (row.leaf) {
            
            values = [row.name, row.id, row.parentId, row.erfass, row.bemerk, row.leaf, row.metanode, row.inherited, row.path, row.level];
            range = [values];
            cell.offset(col, 1, 1, values.length).setValues(range);
            
        } else {
            cell.offset(col, 0).setValue(pad(row.name, level * PADDING, String.fromCharCode(160)));
            cell.offset(col, 0, 1, 20).setBackgroundRGB(153, 153, 255);
        }
        values.push([row.name]);
        col++;
    }
};

function onOpen() {
    readRows();
    var sheet = SpreadsheetApp.getActiveSpreadsheet();
    var entries = [{
        name: "Datei neu lesen",
        functionName: "readRows"
    }];
    sheet.addMenu("Skripte", entries);
}; 
