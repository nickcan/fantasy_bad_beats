BadBeats = {};

BadBeats.application = function() {
  BadBeats.View.hideComments();
  BadBeats.Lightbox.hideLightbox();
  var controller = new BadBeats.Controller();
  controller.bindEvents();
}