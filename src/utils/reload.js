// Prevent pull refresh chrome
var lastTouchY = 0;
var preventPullToRefresh = false;
window.document.body.addEventListener("touchstart", function(e) {
    if (e.touches.length != 1) { return; }
    lastTouchY = e.touches[0].clientY;
    preventPullToRefresh = window.pageYOffset == 0;
}, false);

window.document.body.addEventListener("touchmove", function(e) {

    var touchY = e.touches[0].clientY;
    var touchYDelta = touchY - lastTouchY;
    lastTouchY = touchY;
    if (preventPullToRefresh) {
        // To suppress pull-to-refresh it is sufficient to preventDefault the first overscrolling touchmove.
        preventPullToRefresh = false;
        if (touchYDelta > 0) {
            e.preventDefault();
            return;
        }
    }

}, false);