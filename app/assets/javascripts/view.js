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
  },

  switchToDownvote: function(element, id, voteCount) {
    $(element).siblings('.vote_count').text("Votes: " + voteCount)
    $(element).replaceWith("<a class='small-link downvote' href='/votes/" + id + "'>Downvote</a>")
  },

  switchToUpvote: function(element, id, voteCount) {
    $(element).siblings('.vote_count').text("Votes: " + voteCount)
    $(element).replaceWith("<a class='small-link upvote' href='/beats/" + id + "/upvote'>Upvote</a>")
  }
};