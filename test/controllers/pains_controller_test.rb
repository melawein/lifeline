require 'test_helper'

class PainsControllerTest < ActionDispatch::IntegrationTest
  test "should get new" do
    get pains_new_url
    assert_response :success
  end

  test "should get create" do
    get pains_create_url
    assert_response :success
  end

end
