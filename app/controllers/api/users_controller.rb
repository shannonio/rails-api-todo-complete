class Api::UsersController < ApiController
  before_action :authenticate_user!

  def show
    render json: {
      data: {
        message: "Welcome #{current_user.email}",
        user: current_user
      }
    }, status: 200
  end
  
end
