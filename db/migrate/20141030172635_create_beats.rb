class CreateBeats < ActiveRecord::Migration
  def change
    create_table :beats do |t|
      t.text :content
      t.belongs_to :user
      t.timestamps
    end
  end
end
