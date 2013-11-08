class CreateSounds < ActiveRecord::Migration
  def change
    create_table :sounds do |t|
      t.string :sound_name
      t.string :description
      t.integer :rating
      t.string :location
      t.references :user, index: true

      t.timestamps
    end
  end
end
