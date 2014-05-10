class AvailableAmount < ActiveRecord::Migration
  def change
  	add_column("consumption_rates","available_units", :datetime)
  end
end
