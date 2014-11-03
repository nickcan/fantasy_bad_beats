BadBeats.View = {
  toggleComments: function(element) {
    $(element).parents('.beat_content').siblings('.comments_container').slideToggle(500);
  },

  toggleBeatForm: function() {
    $('#new_beat').slideToggle('slow')
  },

  switchToDownvote: function(element, id, voteCount) {
    $(element).siblings('.vote_count').text(voteCount)
    $(element).replaceWith("<a class='small-link downvote' href='/votes/" + id + "'><img class='voted_fist' src='/assets/fist_small.png'></a>")
  },

  switchToUpvoteBeat: function(element, id, voteCount) {
    $(element).siblings('.vote_count').text(voteCount)
    $(element).replaceWith("<a class='small-link upvote vote_link' href='/beats/" + id + "/upvote'><img src='/assets/fist_small.png'></a>")
  },

  switchToUpvoteComment: function(element, id, voteCount) {
    $(element).siblings('.vote_count').text(voteCount)
    $(element).replaceWith("<a class='small-link vote_link' href='/comments/" + id + "/upvote'>Upvote</a>")
  }
};