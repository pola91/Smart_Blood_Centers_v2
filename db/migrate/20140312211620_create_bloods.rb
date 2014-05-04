class CreateBloods < ActiveRecord::Migration
  def change
    create_table :bloods do |t|
      t.integer :bloodID
      t.string :type
      t.string :group
      t.datetime :expirationDate
      t.integer :blood_center_id

      t.timestamps
    end
  end
end
