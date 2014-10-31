BadBeats.View = {
  hideComments: function() {
    $('.comments_container').hide();
  },

  toggleComments: function(element) {
    $(element).parents('.beat_content').siblings('.comments_container').slideToggle(500);
  },

  hideBeatForm: function() {
    $('#new_beat').hide();
  },

  toggleBeatForm: function() {
    $('#new_beat').slideToggle('slow')
  }
};