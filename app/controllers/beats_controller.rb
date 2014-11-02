class BeatsController < ApplicationController
  def index
    if params[:order] == "most_votes"
      @beats = Beat.most_votes
    else
      @beats = Beat.most_recent
    end
  end

  def create
    if current_user
      beat = current_user.beats.create(beat_params)
      redirect_to root_path
    else
      Beat.create(beat_params)
      redirect_to root_path
    end
  end

  def edit
    @beat = Beat.find(params[:id])
  end

  def update
    beat = Beat.find(params[:id])
    beat.update_attributes(beat_params)
    redirect_to current_user
  end

  def destroy
    Beat.find(params[:id]).destroy
    redirect_to current_user
  end

  def upvote
    beat = Beat.find(params[:id])
    vote = beat.votes.create()
    current_user.votes << vote
    beat.update_count
    render json: {vote: vote, obj: beat}.to_json
  end

  private

  def beat_params
    params.require(:beat).permit(:content)
  end
end