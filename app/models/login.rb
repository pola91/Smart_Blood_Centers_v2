class Login < ActiveRecord::Base
belongs_to :registered_user
belongs_to :officer
end
