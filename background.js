chrome.runtime.onMessage.addListener(
   function(request, sender, sendResponse) {
      if (request.action == 'getActiveTabUrl') {
         chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
            sendResponse({
               url: tabs[0].url
            });
         });
         return true;
      }
   }
);

chrome.runtime.onMessage.addListener(
   function(request, sender, sendResponse) {
      if (request.action == 'getDomContent') {
         const fetchDomContent = async () => {
            const tabs = await chrome.tabs.query({active: true, currentWindow: true});
            const testTabs = tabs.filter(tab => tab.url.includes(request.url));
            return await chrome.scripting.executeScript({
               target: { tabId: testTabs[0].id },
               func: () => {
                  return document.body.outerHTML;
               }
            });
         }
         fetchDomContent().then(domContent => {
            sendResponse({ domContent: domContent[0].result });
         });
         return true;
      }
   }
);

