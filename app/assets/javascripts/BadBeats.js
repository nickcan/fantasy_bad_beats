BadBeats = {};

BadBeats.application = function() {
  BadBeats.Lightbox.hideLightbox();
  $('#accordion').accordion({collapsible: true, active: false});
  var controller = new BadBeats.Controller();
  controller.bindEvents();
}