function acceptDisclaimer() {
    let target = "I accept this disclaimer, continue to download file";

    let aElements = document.getElementsByTagName("a");
    for (let i = 0; i < aElements.length; i++) {
        if (aElements[i].text === target) {
            aElements[i].click();
            return true;
        }
    }
    return false;
}

function removeWait() {
    let waitElement = document.getElementById("sm_dl_wait");

    if (waitElement === null) {
        return false;
    }

    let url = waitElement.getAttribute("data-id");
    location.replace(url);
    return true;
}

(function() {
    if (acceptDisclaimer()) {
        return;
    }
    if (removeWait()) {
        return;
    }
})();
