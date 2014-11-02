class CommentsController < ApplicationController
  before_filter :get_comment, only: [:destroy, :upvote]

  def create
    comment = Beat.find(params[:beat_id]).comments.create(comment_params)
    current_user.comments << comment if current_user != nil
    redirect_to root_path
  end

  def destroy
    @comment.destroy
    redirect_to root_path
  end

  def upvote
    vote = @comment.votes.create()
    current_user.votes << vote
    @comment.update_count
    render json: {vote: vote, obj: @comment}.to_json
  end

  private

  def comment_params
    params.require(:comment).permit(:content)
  end

  def get_comment
    @comment = Comment.find(params[:id])
  end
end