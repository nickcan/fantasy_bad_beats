class BeatsController < ApplicationController
  def index
    @beats = Beat.all.order(created_at: :desc)
  end

  def create
    if current_user
      beat = current_user.beats.create(beat_params)
      redirect_to root_path
    else
      redirect_to root_path
    end
  end

  private

  def beat_params
    params.require(:beat).permit(:content)
  end
end