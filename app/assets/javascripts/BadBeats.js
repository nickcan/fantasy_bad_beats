BadBeats = {};

BadBeats.application = function() {
  BadBeats.View.hideComments();
  BadBeats.View.hideBeatForm();
  BadBeats.Lightbox.hideLightbox();
  var controller = new BadBeats.Controller();
  controller.bindEvents();
}