class Api::ListsController < ApiController
  before_action :authenticate_user!

  def index
    # Find out why current_api_user is not working
    lists = List.where(user_id: current_user)
    render json: lists, each_serializer: ListSerializer
  end

  def show
    list = List.find(params[:id])
    if list
      render json: list, serializer: ListSerializer
    else
      render json: { errors: list.errors.full_messages }, status: :unprocessable_entity
    end
  end

  def create
    user_id = params[:user_id] || current_api_user.id
    list = List.new(list_params)
    list.user = User.find(user_id)
    if list.save
      render json: list
    else
      render json: { errors: list.errors.full_messages }, status: :unprocessable_entity
    end
  end

  def update
    list = List.find(params[:list_id])
    if list.update(list_params)
      render json: list
    else
      render json: { errors: list.errors.full_messages }, status: :unprocessable_entity
    end
  end

  def destroy
    begin
      list = List.find(params[:id])
      list.destroy
      render json: {}, status: :no_content
    rescue ActiveRecord::RecordNotFound
      render :json => {}, :status => :not_found
    end
  end

  private
  def list_params
    params.permit(:name, :user_id, :private, :id)
  end
end
