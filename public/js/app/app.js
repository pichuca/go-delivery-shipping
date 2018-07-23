/*
* Window.
*/
(function(win, doc) {
  var trackingButton = doc.querySelector('.tracking');
  function onTrackingClick() {
    console.log('Redirect to tracker page. WIP (Work In Progress.)');
  }
  trackingButton.addEventListener('click', onTrackingClick, false);
})(window, document);
