class RemoveSoundRatingFromSounds < ActiveRecord::Migration
  def change
    remove_reference :sounds, :sound_rating, index: true
  end
end
