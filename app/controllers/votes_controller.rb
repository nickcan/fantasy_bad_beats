class VotesController < ApplicationController
  def destroy
    Vote.find(params[:id]).destroy
    render nothing: true
  end
end