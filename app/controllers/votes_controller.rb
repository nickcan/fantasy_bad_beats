class VotesController < ApplicationController
  def destroy
    vote = Vote.find(params[:id]).destroy
    beat = Beat.find(vote.voteable_id)
    beat.update_count
    render json: {vote: vote, obj: beat}.to_json
  end
end