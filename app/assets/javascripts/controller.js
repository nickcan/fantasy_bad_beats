BadBeats.Controller = function(view) {};

BadBeats.Controller.prototype = {
  bindEvents: function() {
    this.listenForComments();
    this.showLoginLightbox();
    this.showSignupLightbox();
    this.hideLightbox();
    this.showBeatForm();
    this.upvote();
    this.downvote();
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
    $('.beat').on('click', '.upvote', function(event) {
      event.preventDefault();
      var button = $(this)
      $.ajax({
        url: $(this).attr('href'),
        type: 'GET'
      }).done(function(data) {
        BadBeats.View.switchToDownvote(button, data.vote.id, data.obj.vote_count)
      })
    })
  },

  downvote: function() {
    $('.beat').on('click', '.downvote', function(event) {
      event.preventDefault();
      var button = $(this)
      $.ajax({
        url: $(this).attr('href'),
        type: 'GET'
      }).done(function(data) {
        BadBeats.View.switchToUpvote(button, data.vote.voteable_id, data.obj.vote_count)
      })
    })
  }
}