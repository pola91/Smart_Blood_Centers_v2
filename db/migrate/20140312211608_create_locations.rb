class CreateLocations < ActiveRecord::Migration
  def change
    create_table :locations do |t|
      t.integer :latitude
      t.integer :longitude
      t.integer :guest_id
      t.integer :blood_center_id

      t.timestamps
    end
  end
end
