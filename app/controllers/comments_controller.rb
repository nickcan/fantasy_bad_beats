class CommentsController < ApplicationController
  def create
    Beat.find(params[:beat_id]).comments.create(comment_params)
    redirect_to root_path
  end

  def destroy
    Comment.find(params[:id]).destroy
    redirect_to root_path
  end

  private

  def comment_params
    params.require(:comment).permit(:content)
  end
end