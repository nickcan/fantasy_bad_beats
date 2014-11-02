class BeatsController < ApplicationController
  before_filter :get_beat, only: [:edit, :update, :destroy, :upvote]

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
  end

  def update
    @beat.update_attributes(beat_params)
    redirect_to root_path
  end

  def destroy
    @beat.destroy
    redirect_to root_path
  end

  def upvote
    vote = @beat.votes.create()
    current_user.votes << vote
    @beat.update_count
    render json: {vote: vote, obj: @beat}.to_json
  end

  private

  def beat_params
    params.require(:beat).permit(:content)
  end

  def get_beat
    @beat = Beat.find(params[:id])
  end
end