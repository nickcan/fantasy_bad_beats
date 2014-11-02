BadBeats.Controller = function(view) {};

BadBeats.Controller.prototype = {
  bindEvents: function() {
    this.listenForComments();
    this.showLoginLightbox();
    this.showSignupLightbox();
    this.hideLightbox();
    this.showBeatForm();
    this.upvoteBeat();
    this.upvoteComment();
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

  upvoteBeat: function() {
    $('.beat').on('click', '.upvote_beat', function(event) {
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

  upvoteComment: function() {
    $('.beat').on('click', '.upvote_comment', function(event) {
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
    var self = this;
    $('.beat').on('click', '.downvote', function(event) {
      event.preventDefault();
      var button = $(this)
      $.ajax({
        url: $(this).attr('href'),
        type: 'DELETE'
      }).done(function(data) {
        self.downvoteDone(data, button);
      })
    })
  },

  downvoteDone: function(data, button) {
    if (data.vote.voteable_type == "Beat") {
      BadBeats.View.switchToUpvoteBeat(button, data.vote.voteable_id, data.obj.vote_count)
    } else {
      BadBeats.View.switchToUpvoteComment(button, data.vote.voteable_id, data.obj.vote_count)
    }
  }
}