chrome.action.onClicked.addListener((tab) => {
  chrome.notifications.create({
    type: "basic",
    iconUrl: "logo.png",
    title: "CoverCraft AI",
    message: "Click on the green icon at the top right to open the extension.",
  });
});
