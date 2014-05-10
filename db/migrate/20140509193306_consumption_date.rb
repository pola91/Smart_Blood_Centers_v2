class ConsumptionDate < ActiveRecord::Migration
  def change
  	add_column("bloods","Consumption_Date", :datetime)
  end
end
