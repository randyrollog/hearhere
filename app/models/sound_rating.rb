class SoundRating < ActiveRecord::Base

  belongs_to :sound
  belongs_to :user

  validates_uniqueness_of :sound_id, scope: :user_id
  validates_inclusion_of :value, in: [1, 4]
  validate :ensure_not_author

  def ensure_not_author
    errors.add :user_id, "is the author of the sound" if sound.user_id == user_id
  end
end
