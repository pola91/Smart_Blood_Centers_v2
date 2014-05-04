class Location < ActiveRecord::Base
belongs_to :guest
belongs_to :blood_center
end
