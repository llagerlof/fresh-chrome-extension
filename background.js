// event to run execute.js contents when extension's button is clicked
chrome.browserAction.onClicked.addListener(function (tab) {
  chrome.tabs.executeScript(tab.ib, {
    file: 'execute.js'
  });
});
