require 'test_helper'

class SleepsControllerTest < ActionDispatch::IntegrationTest
  test "should get create" do
    get sleeps_create_url
    assert_response :success
  end

  test "should get new" do
    get sleeps_new_url
    assert_response :success
  end

end
