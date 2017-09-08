class ApiController < ApplicationController

  skip_before_action :verify_authenticity_token

  private
  
  def authenticated?
    authenticate_or_request_with_http_basic { |username, password|
       User.where(email: username).present? ? (User.where(email: username).first).valid_password?(password) : false
     }
  end

end
