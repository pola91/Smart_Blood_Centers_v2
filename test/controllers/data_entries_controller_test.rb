require 'test_helper'

class DataEntriesControllerTest < ActionController::TestCase
  test "should get withdraw" do
    get :withdraw
    assert_response :success
  end

  test "should get donate" do
    get :donate
    assert_response :success
  end

end
