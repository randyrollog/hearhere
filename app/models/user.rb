require 'bcrypt'

class User < ActiveRecord::Base
	has_many :sounds
  # has_many :tags

  def authenticate(password)
    self.hashed_password ==
    BCrypt::Engine.hash_secret(password, self.salt)
end
