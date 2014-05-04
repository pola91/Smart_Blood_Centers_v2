require 'test_helper'

class BloodCentersControllerTest < ActionController::TestCase
  setup do
    @blood_center = blood_centers(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:blood_centers)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create blood_center" do
    assert_difference('BloodCenter.count') do
      post :create, blood_center: { centerID: @blood_center.centerID }
    end

    assert_redirected_to blood_center_path(assigns(:blood_center))
  end

  test "should show blood_center" do
    get :show, id: @blood_center
    assert_response :success
  end

  test "should get edit" do
    get :edit, id: @blood_center
    assert_response :success
  end

  test "should update blood_center" do
    patch :update, id: @blood_center, blood_center: { centerID: @blood_center.centerID }
    assert_redirected_to blood_center_path(assigns(:blood_center))
  end

  test "should destroy blood_center" do
    assert_difference('BloodCenter.count', -1) do
      delete :destroy, id: @blood_center
    end

    assert_redirected_to blood_centers_path
  end
end
