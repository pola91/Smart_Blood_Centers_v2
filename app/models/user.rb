class User < ActiveRecord::Base
  attr_accessible :login, :password , :password_confirmation ,:type, :name, :gender, :address, 
                  :nationalID, :mobile, :telephone, :dateOfBirth, as: :registered_user
  attr_accessible :login, :password , :password_confirmation ,:type, 
                  :name,:gender, :address, :nationalID
  acts_as_authentic
end
