require 'test_helper'

class RegisteredUsersControllerTest < ActionController::TestCase
  test "should get profile" do
    get :profile
    assert_response :success
  end

  test "should get donate" do
    get :donate
    assert_response :success
  end

  test "should get need" do
    get :need
    assert_response :success
  end

  test "should get transfuse" do
    get :transfuse
    assert_response :success
  end

  test "should get log" do
    get :log
    assert_response :success
  end

end
