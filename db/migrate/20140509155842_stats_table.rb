class StatsTable < ActiveRecord::Migration
	def up
  		create_table :consumption_rates do |t|
   			t.integer  "recordID"
    		t.integer  "centerID"
    		t.integer  "month"
    		t.integer  "Consumed_units"
    		t.string   "type"    
  		end
 	end

 	def down 
 		drop_tables :consumption_rates
 	end
end
