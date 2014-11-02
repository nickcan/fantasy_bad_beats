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

  switchToUpvoteBeat: function(element, id, voteCount) {
    $(element).siblings('.vote_count').text("Votes: " + voteCount)
    $(element).replaceWith("<a class='small-link upvote_beat' href='/beats/" + id + "/upvote'>Upvote</a>")
  },

  switchToUpvoteComment: function(element, id, voteCount) {
    $(element).siblings('.vote_count').text("Votes: " + voteCount)
    $(element).replaceWith("<a class='small-link upvote_comment' href='/comments/" + id + "/upvote'>Upvote</a>")
  }
};