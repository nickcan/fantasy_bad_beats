BadBeats = {};

BadBeats.application = function() {
  BadBeats.View.hideComments();
  BadBeats.View.hideBeatForm();
  $('#accordion').accordion({collapsible: true, active: false});
  var controller = new BadBeats.Controller();
  controller.bindEvents();
}