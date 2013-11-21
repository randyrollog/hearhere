require 'bcrypt'

class User < ActiveRecord::Base
	has_many :sounds
  has_many :sound_ratings

  before_save :hash_password

  def authenticate(password)
    self.hashed_password ==
    BCrypt::Engine.hash_secret(password, self.salt)
  end

  def avg_votes
    # SoundRating.joins(:sound).where(sounds: {user_id: self.id}).average('value')
    sound_ratings = SoundRating.joins(:sound).where(sounds: {user_id: self.id})
    
    # Return zero if sound_ratings is blank
    if sound_ratings.blank?
      0
    else
      val_array = []
      sound_ratings.each do |s|
        puts s.value
        val_array.push(s.value)
      end
      val_array.inject(:+)/sound_ratings.count.to_f
    end

  end

  # Determines if a user can vote for a sound
  def can_vote_for?(sound)
    sound_ratings.build(value: 1, sound: sound).valid?
  end

  private

  def hash_password
    if password.present?
      self.salt = BCrypt::Engine.generate_salt
      self.hashed_password = BCrypt::Engine.hash_secret(password, self.salt)
      password = password_confirmation = nil
    end
  end

end
