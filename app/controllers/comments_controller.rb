class CommentsController < ApplicationController
  def create
    Beat.find(params[:beat_id]).comments.create(content: params[:comment][:content], user_id: current_user.id)
    redirect_to root_path
  end

  def destroy
    Comment.find(params[:id]).destroy
    redirect_to root_path
  end
end