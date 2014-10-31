BadBeats.Controller = function(view) {};

BadBeats.Controller.prototype = {
  bindEvents: function() {
    this.listenForComments();
    this.showLoginLightbox();
    this.showSignupLightbox();
    this.hideLightbox();
  },

  listenForComments: function() {
    $('.comments_button').click(function() {
      BadBeats.View.toggleComments(this);
    })
  },

  showLoginLightbox: function() {
    $('.login').click(function() {
      BadBeats.Lightbox.fadeInLoginForm();
    })
  },

  showSignupLightbox: function() {
    $('.signup').click(function() {
      BadBeats.Lightbox.fadeInSignupForm();
    })
  },

  hideLightbox: function() {
    $('.background').click(function() {
      BadBeats.Lightbox.fadeOutLightbox()
    })
  }
}