BadBeats.Controller = function(view) {};

BadBeats.Controller.prototype = {
  bindEvents: function() {
    this.listenForComments();
    this.showLoginLightbox();
    this.showSignupLightbox();
    this.hideLightbox();
    this.showBeatForm();
    this.upvote();
  },

  listenForComments: function() {
    $('.comments_button').click(function() {
      BadBeats.View.toggleComments(this);
    })
  },

  showLoginLightbox: function() {
    $('.login').click(BadBeats.Lightbox.fadeInLoginForm)
  },

  showSignupLightbox: function() {
    $('.signup').click(BadBeats.Lightbox.fadeInSignupForm)
  },

  hideLightbox: function() {
    $('.background').click(BadBeats.Lightbox.fadeOutLightbox)
  },

  showBeatForm: function() {
    $('.beat_button').click(BadBeats.View.toggleBeatForm);
  },

  upvote: function() {
    $('.upvote').click(function(event) {
      event.preventDefault();
      $.ajax({
        url: $(this).attr('href'),
        type: 'GET'
      }).done(function(data) {
        console.log(data);
      })
    })
  }
}