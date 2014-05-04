require 'test_helper'

class AdminsControllerTest < ActionController::TestCase
  test "should get officers" do
    get :officers
    assert_response :success
  end

  test "should get registered_users" do
    get :registered_users
    assert_response :success
  end

  test "should get blood_centers" do
    get :blood_centers
    assert_response :success
  end

end
