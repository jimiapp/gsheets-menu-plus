//Jimi Appleton xx/xx/xx

function onOpen() {
  var ui = SpreadsheetApp.getUi();
  ui.createMenu("Custom menu")
    .addItem("Menu item 1", "runFnc1")
    .addItem("Menu item 2", "runFnc2")
    .addToUi();
}

function runFnc1() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName("Sheet1");
  //Add code
}

function runFnc2() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName("Sheet1");
  //Add code
}