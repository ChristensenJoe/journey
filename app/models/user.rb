class User < ApplicationRecord
  has_secure_password

  has_many :user_itineraries
  has_many :itineraries, through: :user_itineraries

  validates :username, 
    presence: true, 
    uniqueness: true, 
    exclusion: { 
      in: %w(login settings search), 
      message: "'%{value}' is a reserved username."
    }
  
  validates :email, presence: true, uniqueness: true
end
