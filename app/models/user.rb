class User < ActiveRecord::Base
  has_secure_password
  has_many :beats
  has_many :comments
  has_many :votes

  validates :email, :password, presence: true
  validates :email, uniqueness: true

  def voted?(object)
    self.votes.find_by(voteable_id: object.id) != nil
  end

  def get_vote(object)
    self.votes.find_by(voteable_id: object.id)
  end
end