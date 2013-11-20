class AddSoundRatingtoSounds < ActiveRecord::Migration
  def change
    add_reference :sounds, :sound_rating, index: true
  end
end
