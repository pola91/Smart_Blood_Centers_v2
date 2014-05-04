json.array!(@blood_centers) do |blood_center|
  json.extract! blood_center, :id, :centerID
  json.url blood_center_url(blood_center, format: :json)
end
