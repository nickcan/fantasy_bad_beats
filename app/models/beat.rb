class Beat < ActiveRecord::Base
  belongs_to :user
  has_many :comments
  has_many :votes, as: :voteable

  def update_count
    self.update_attributes(vote_count: self.votes.count)
  end
end