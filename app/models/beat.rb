class Beat < ActiveRecord::Base
  belongs_to :user
  has_many :comments
  has_many :votes, as: :voteable

  scope :most_recent, -> {order(created_at: :desc)}
  scope :most_votes, -> {order(vote_count: :asc)}

  def update_count
    self.update_attributes(vote_count: self.votes.count)
  end
end