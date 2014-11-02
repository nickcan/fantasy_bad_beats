class CreateBeats < ActiveRecord::Migration
  def change
    create_table :beats do |t|
      t.text :content
      t.integer :vote_count
      t.belongs_to :user
      t.timestamps
    end
  end
end
