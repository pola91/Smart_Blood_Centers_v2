class TransfusionTables < ActiveRecord::Migration
  def up
  	create_table :Trandfusion_Requests do |t|
  		t.integer :sender
  		t.integer :receiver
  		t.string :type
  		t.integer :amount 
  		t.boolean :approve
  	end
  end

  def down
  	drop_table :Trandfusion_Requests
  end

end
