class CreateBloodCenters < ActiveRecord::Migration
  def change
    create_table :blood_centers do |t|
      t.integer :centerID

      t.timestamps
    end
  end
end
