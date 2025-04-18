
function doPost(e) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("สมาชิกเฮียชา");
  var data = [
    e.parameter.phone,
    e.parameter.name,
    e.parameter.password,
    e.parameter.bank,
    e.parameter.account,
    new Date()
  ];
  sheet.appendRow(data);
  return ContentService.createTextOutput("บันทึกข้อมูลเรียบร้อย");
}
