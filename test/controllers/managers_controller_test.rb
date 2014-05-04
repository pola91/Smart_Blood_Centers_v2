require 'test_helper'

class ManagersControllerTest < ActionController::TestCase
  test "should get view_reports" do
    get :view_reports
    assert_response :success
  end

  test "should get report_settings" do
    get :report_settings
    assert_response :success
  end

  test "should get sent_requests" do
    get :sent_requests
    assert_response :success
  end

  test "should get recieved_requests" do
    get :recieved_requests
    assert_response :success
  end

end
