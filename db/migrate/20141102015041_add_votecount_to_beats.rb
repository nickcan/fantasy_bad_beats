class AddVotecountToBeats < ActiveRecord::Migration
  def change
    add_column :beats, :vote_count, :integer, default: 0
  end
end
