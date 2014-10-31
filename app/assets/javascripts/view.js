BadBeats.View = {
  hideComments: function() {
    $('.comments_container').hide();
  },

  toggleComments: function(element) {
    $(element).siblings('.comments_container').slideToggle(500);
  }
};