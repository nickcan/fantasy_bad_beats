BadBeats = {};

BadBeats.application = function() {
  BadBeats.View.hideComments();
  var controller = new BadBeats.Controller();
  controller.bindEvents();
}