class Comment < ActiveRecord::Base
  belongs_to :user
  belongs_to :beat
  has_many :votes, as: :voteable

  def update_count
    self.update_attributes(vote_count: self.votes.count)
  end
end