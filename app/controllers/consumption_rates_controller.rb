class ConsumptionRatesController < ApplicationController

	def fun_name (arguments) 
		@Excess_A = Array.new 
		@Excess_B = Array.new 
		@Excess_AB = Array.new 
		@Excess_O = Array.new 
		@Shortage_Arr= Array.new
		@Process_for_A = consumption_rate.where(:type=>A)
		@Process_for_B = consumption_rate.where(:type=>B)
		@Process_for_AB = consumption_rate.where(:type=>AB)
		@Process_for_O = consumption_rate.where(:type=>O)

		@Process_for_A .each do|n|
  			if n.available_units <= n.Consumed_units
  				excess_amount = n.available_units - n.Consumed_units
  				@Excess_A.insert(blood.where(:blood_center_id=>n.centerID ,:type=>"A").order("expirationDate ASC").limit(excess_amount))
  			else
  				@Shortage_Arr.insert(n)
  			end
		end

		@Process_for_B .each do|n|
  			if n.available_units <= n.Consumed_units
  				excess_amount = n.available_units - n.Consumed_units
  				@Excess_B.insert(blood.where(:blood_center_id=>n.centerID ,:type=>"B").order("expirationDate ASC").limit(excess_amount))
  			else
  				@Shortage_Arr.insert(n)
  			end
		end

		@Process_for_AB .each do|n|
  			if n.available_units <= n.Consumed_units
  				excess_amount = n.available_units - n.Consumed_units
  				@Excess_AB.insert(blood.where(:blood_center_id=>n.centerID ,:type=>"AB").order("expirationDate ASC").limit(excess_amount))
  			else
  				@Shortage_Arr.insert(n)
  			end
		end	

		@Process_for_O .each do|n|
  			if n.available_units <= n.Consumed_units
  				excess_amount = n.available_units - n.Consumed_units
  				@Excess_O.insert(blood.where(:blood_center_id=>n.centerID ,:type=>"O").order("expirationDate ASC").limit(excess_amount))
  			else
  				@Shortage_Arr.insert(n)
  			end
		end	

		@Excess_A.sort_by(&:expirationDate).reverse
		@Excess_B.sort_by(&:expirationDate).reverse
		@Excess_AB.sort_by(&:expirationDate).reverse
		@Excess_O.sort_by(&:expirationDate).reverse

		@transfused_units=Array.new
		@transfused_to=Array.new

		@Shortage_Arr.each do|n|
  			short_amount = n.Consumed_units - n.available_units
  			if n.type=="A"
  				short_amount.times do
  					if @Excess_A.size>0
  						@transfused_units.insert(@Excess_A[0])
  						@transfused_to.insert(n.centerID)
  						@Excess_A.delete_at(0)
  					else 
  						break
  					end	
  				end

  			else if n.type=="B"
  				short_amount.times do
  					if @Excess_B.size>0
  						@transfused_units.insert(@Excess_B[0])
  						@transfused_to.insert(n.centerID)
  						@Excess_B.delete_at(0)
  					else 
  						break
  					end

  				end		
 			else if n.type=="AB"
  				short_amount.times do
  					if @Excess_AB.size>0
  						@transfused_units.insert(@Excess_AB[0])
  						@transfused_to.insert(n.centerID)
  						@Excess_AB.delete_at(0)
  					else 
  						break
  					end
  				end
  			else if n.type=="O"
  				short_amount.times do
  					if @Excess_O.size>0
  						@transfused_units.insert(@Excess_O[0])
  						@transfused_to.insert(n.centerID)
  						@Excess_O.delete_at(0)
  					else 
  						break
  					end
  				end
  				
  			end	
		end

		@counter=0
		@transfused_units.each do|n|
			Trandfusion_Request.new({sender:=> transfused_to[@counter],receiver: => n.blood_center_id, type:=> n.type, amount:=>1})
			@counter+=1
		end	

	end
end
