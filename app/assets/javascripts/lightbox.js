BadBeats.Lightbox = {
  hideLightbox: function() {
    $('.background, .login_lightbox, .signup_lightbox').hide();
  },

  fadeOutLightbox: function() {
    $('.background, .login_lightbox, .signup_lightbox').fadeOut('slow');
  },

  fadeInLoginForm: function() {
    $('.login_lightbox, .background').fadeIn('slow');
  },

  fadeInSignupForm: function() {
    $('.signup_lightbox, .background').fadeIn('slow');
  }
}