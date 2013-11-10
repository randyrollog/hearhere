class AddSoundNameToSounds < ActiveRecord::Migration
  def change
    add_column :sounds, :sound_name, :string
  end
end
