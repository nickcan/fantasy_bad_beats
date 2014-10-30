class BeatsController < ApplicationController
  def all_beats
    beats = Beat.all
    render json: beats.to_json
  end
end