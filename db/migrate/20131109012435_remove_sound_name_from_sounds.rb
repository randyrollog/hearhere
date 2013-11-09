class RemoveSoundNameFromSounds < ActiveRecord::Migration
  def change
    remove_column :sounds, :sound_name, :string
  end
end
