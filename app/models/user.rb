class User < ActiveRecord::Base
  has_secure_password
  has_many :beats
  has_many :comments
  has_many :votes

  validates :email, :password, presence: true
  validates :email, uniqueness: true
end