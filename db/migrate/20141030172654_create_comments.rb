class CreateComments < ActiveRecord::Migration
  def change
    create_table :comments do |t|
      t.text :content, limit: 200
      t.integer :vote_count
      t.belongs_to :user
      t.belongs_to :beat
      t.timestamps
    end
  end
end
