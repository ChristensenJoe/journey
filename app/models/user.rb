class User < ApplicationRecord
  has_secure_password

  validates :username, 
    presence: true, 
    uniqueness: true, 
    exclusion: { 
      in: %w(login settings search), 
      message: "'%{value}' is a reserved username."
    }
  
  validates :email, presence: true, uniqueness: true
end
