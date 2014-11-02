class VotesController < ApplicationController
  def destroy
    vote = Vote.find(params[:id]).destroy
    object = vote.voteable_type.constantize.find(vote.voteable_id)
    object.update_count
    render json: {vote: vote, obj: object}.to_json
  end
end