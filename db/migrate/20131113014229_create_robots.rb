class CreateRobots < ActiveRecord::Migration
  def change
    create_table :robots do |t|
      t.string :robot_name
      t.string :model

      t.timestamps
    end
  end
end
