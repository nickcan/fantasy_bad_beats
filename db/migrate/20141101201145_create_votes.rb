class CreateVotes < ActiveRecord::Migration
  def change
    create_table :votes do |t|
      t.integer :voteable_id
      t.string :voteable_type
      t.belongs_to :voteable
      t.belongs_to :user
      t.timestamps
    end
  end
end
