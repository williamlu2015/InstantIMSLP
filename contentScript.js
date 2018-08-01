function normalizeUrl() {
    let url = location.href;
    let array = url.split("/");
    let index = array.indexOf("Special:ImagefromIndex");

    if (index === -1) {
        return;
    }

    if (index + 1 >= array.length) {
        return;
    }

    let newUrl = array.slice(0, index + 1).join("/") + "/" + array[index + 1];

    if (newUrl === url) {
        return false;
    } else {
        location.replace(newUrl);
        return true;
    }
}

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
        return;
    }

    let url = waitElement.getAttribute("data-id");
    location.replace(url);
}

(function() {
    if (acceptDisclaimer()) {
        return;
    }

    removeWait();
})();
