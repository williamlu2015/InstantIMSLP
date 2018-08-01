/**
 * Checks if the "copyright disclaimer" is on the IMSLP webpage, and
 * automatically clicks the "accept" link if the disclaimer is found.
 * @returns {!boolean}   whether the disclaimer was found and clicked
 */
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

/**
 * Looks for the 15-second "donation wait" on the IMSLP webpage, and
 * automatically redirects the browser to the destination PDF if the wait is
 * found.
 * @returns {!boolean}   whether the wait was found and skipped
 */
function removeWait() {
    let waitElement = document.getElementById("sm_dl_wait");

    if (waitElement === null) {
        return false;
    }

    let url = waitElement.getAttribute("data-id");
    location.replace(url);
    return true;
}

/**
 * The entry point of the content script. Checks if the "copyright disclaimer"
 * is on the IMSLP webpage and clicks the "accept" link if so. Otherwise, looks
 * for the 15-second "donation wait" and redirects the browser to the
 * destination PDF.
 */
(function() {
    if (acceptDisclaimer()) {
        return;
    }
    if (removeWait()) {
        return;
    }
})();
