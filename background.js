function sendMessageToContentScript(tabId) {
  chrome.tabs.sendMessage(tabId, { message: "toggle" });
}

chrome.action.onClicked.addListener(async (tab) => {
  if (!tab) return;
  sendMessageToContentScript(tab.id);
});
