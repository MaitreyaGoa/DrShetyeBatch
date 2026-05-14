// ============================================================
// GOA SSC Platform – Google Apps Script Backend
// One script handles ALL tests (each test = separate sheet tab)
// Deploy: Web App | Execute as: Me | Access: Anyone
// ============================================================

function doPost(e) {
  try {
    var data = JSON.parse(e.postData.contents);
    var testId = data.testId || "unknown";
    var sheet  = getOrCreateSheet(testId, data.testTitle || testId);

    // Build section score columns dynamically
    var secScores = data.scores || {};
    var eng    = secScores["English"]   || 0;
    var maths  = secScores["Maths"]     || 0;
    var reason = secScores["Reasoning"] || 0;

    sheet.appendRow([
      data.name,
      data.timestamp,
      eng,
      maths,
      reason,
      data.total,
      ((data.total / (data.outOf || 50)) * 100).toFixed(1) + "%"
    ]);

    return ContentService
      .createTextOutput(JSON.stringify({ success: true }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ success: false, error: err.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet(e) {
  try {
    var testId = e.parameter.testId || "";
    if (!testId) {
      // Return list of all test sheets
      var ss     = SpreadsheetApp.getActiveSpreadsheet();
      var sheets = ss.getSheets().map(function(s) { return s.getName(); });
      return ContentService
        .createTextOutput(JSON.stringify({ success: true, tests: sheets }))
        .setMimeType(ContentService.MimeType.JSON);
    }

    var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(testId);
    if (!sheet) {
      return ContentService
        .createTextOutput(JSON.stringify({ success: true, data: [] }))
        .setMimeType(ContentService.MimeType.JSON);
    }

    var rows = sheet.getDataRange().getValues();
    var data = [];

    for (var i = 1; i < rows.length; i++) {
      data.push({
        name:      rows[i][0],
        timestamp: rows[i][1],
        scores: {
          English:   rows[i][2],
          Maths:     rows[i][3],
          Reasoning: rows[i][4]
        },
        total:   rows[i][5],
        percent: rows[i][6]
      });
    }

    // Sort by total descending
    data.sort(function(a, b) { return b.total - a.total; });

    return ContentService
      .createTextOutput(JSON.stringify({ success: true, data: data }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ success: false, error: err.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// Creates a sheet tab per test (e.g. "test1", "test2")
function getOrCreateSheet(testId, testTitle) {
  var ss    = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName(testId);

  if (!sheet) {
    sheet = ss.insertSheet(testId);
    var header = ["Student Name", "Timestamp", "English(/30)", "Maths(/10)", "Reasoning(/10)", "Total(/50)", "Percentage"];
    sheet.appendRow(header);
    var headerRange = sheet.getRange(1, 1, 1, header.length);
    headerRange.setFontWeight("bold")
               .setBackground("#0d2b55")
               .setFontColor("#ffffff");
    sheet.setFrozenRows(1);
    sheet.setTabColor("#c9972a");

    // Rename tab to be friendly
    try { sheet.setName(testId); } catch(e) {}
  }

  return sheet;
}
