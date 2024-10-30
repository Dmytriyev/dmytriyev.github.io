var newWindow = null;
var PreviusUrl;
function openNewWindowPopup(url) {
    if (newWindow == null || newWindow.closed) {
        newWindow = window.open(url, "openNewWindow",);
    }
    else if (PreviusUrl != url) {
        newWindow = window.open(url, "openNewWindow",);
        newWindow.focus();
    }
    else {
        newWindow.focus();
    }
    PreviusUrl = url;
}