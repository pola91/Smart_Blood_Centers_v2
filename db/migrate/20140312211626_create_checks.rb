class CreateChecks < ActiveRecord::Migration
  def change
    create_table :checks do |t|
      t.integer :checkNumber
      t.string :type
      t.string :group
      t.datetime :expirationDate
      t.integer :registered_user_id

      t.timestamps
    end
  end
end
