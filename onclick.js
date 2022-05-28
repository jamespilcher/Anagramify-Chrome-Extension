//anagramify the current tab on icon click
chrome.action.onClicked.addListener((tab) => {
    chrome.scripting.executeScript({
      target: {tabId: tab.id},
      files: ['anagramify.js']
    });
  });