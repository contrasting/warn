const wasteTime = confirm("This is a time wasting website. Are you sure you want to visit?");

if (!wasteTime) {
  // https://stackoverflow.com/questions/32201846/can-an-extension-close-a-tab
  chrome.runtime.sendMessage({closeThis: true});
} else {
  document.getElementById("warn_blocker").remove();
}