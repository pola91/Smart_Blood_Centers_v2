class ConsumptionRate < ActiveRecord::Base

	def fun_name (arguments) 
	Excess_A = Array.new 
	Excess_B = Array.new 
	Excess_AB = Array.new 
	Excess_O = Array.new 
	Process_for_A = consumption_rates.where(:type=>A)
	Process_for_B = consumption_rates.where(:type=>B)
	Process_for_AB = consumption_rates.where(:type=>AB)
	Process_for_O = consumption_rates.where(:type=>O)
	
	
	end
end
