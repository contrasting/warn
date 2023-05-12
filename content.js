// first block the view
const blocker = document.createElement("div");
blocker.style.width = "100%"
blocker.style.height = "100%"
blocker.style.background = "black"
blocker.style.position = "fixed"
blocker.style.zIndex = "20000"
blocker.id = "warn_blocker"
document.body.prepend(blocker)

// wait for blocker to load in
setTimeout(showConfirm, 50)

function showConfirm() {
  const wasteTime = confirm("This is a time wasting website. Are you sure you want to visit?");

  if (!wasteTime) {
    // https://stackoverflow.com/questions/32201846/can-an-extension-close-a-tab
    chrome.runtime.sendMessage({closeThis: true});
  } else {
    document.getElementById("warn_blocker").remove();
  }
}