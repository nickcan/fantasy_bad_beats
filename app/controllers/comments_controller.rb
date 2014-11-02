class CommentsController < ApplicationController
  def create
    comment = Beat.find(params[:beat_id]).comments.create(comment_params)
    current_user.comments << comment if current_user != nil
    redirect_to root_path
  end

  def destroy
    Comment.find(params[:id]).destroy
    redirect_to root_path
  end

  def upvote
    vote = Comment.find(params[:id]).votes.create()
    current_user.votes << vote
    render nothing: true
  end

  private

  def comment_params
    params.require(:comment).permit(:content)
  end
end