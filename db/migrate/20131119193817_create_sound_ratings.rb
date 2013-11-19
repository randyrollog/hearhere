class CreateSoundRatings < ActiveRecord::Migration
  def change
    create_table :sound_ratings do |t|

      t.timestamps
    end
  end
end
