class Comment < ActiveRecord::Base
  belongs_to :user
  belongs_to :beat
  has_many :votes, as: :voteable
end