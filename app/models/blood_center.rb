class BloodCenter < ActiveRecord::Base
has_one :location
has_many :bloods, dependent: :destroy
has_one :manager 
has_many :data_entries 

before_save :replace_manager

def replace_manager
  if  manager && manager.changed?
    puts "***************************** Manager is " +manager
    Manager.where(blood_center_id: self.id).update_all(blood_center_id: nil)
  end
end
end
 # @new_manager = Manager.new(params[:manager])
  # @new_manager.save
  # self.manager = @new_manager
 