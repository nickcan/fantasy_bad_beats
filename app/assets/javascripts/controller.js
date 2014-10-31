BadBeats.Controller = function(view) {};

BadBeats.Controller.prototype = {
  bindEvents: function() {
    this.listenForComments();
    this.showLightbox();
    this.hideLightbox();
  },

  listenForComments: function() {
    $('.comments_button').click(function() {
      BadBeats.View.toggleComments(this);
    })
  },

  showLightbox: function() {
    $('.login, .signup').click(function() {
      BadBeats.Lightbox.fadeInLightbox();
    })
  },

  hideLightbox: function() {
    $('.background').click(function() {
      BadBeats.Lightbox.fadeOutLightbox()
    })
  }
}