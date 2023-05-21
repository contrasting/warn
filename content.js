const dontWasteTime = confirm("This is a time wasting website. Press OK to close.");

if (dontWasteTime) {
  // https://stackoverflow.com/questions/32201846/can-an-extension-close-a-tab
  chrome.runtime.sendMessage({closeThis: true});
}