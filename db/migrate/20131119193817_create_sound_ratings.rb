class CreateSoundRatings < ActiveRecord::Migration
  def change
    create_table :sound_ratings do |t|
      t.integer :value
      t.references :sound
      t.references :user

      t.timestamps
    end
  end
end
