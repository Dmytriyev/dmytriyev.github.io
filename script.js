var newWindow = null;
var PreviusUrl;
function openNewWindow(url) {
    if (newWindow == null || newWindow.closed) {
        newWindow = window.open(url, "openNewWindow");
    }
}