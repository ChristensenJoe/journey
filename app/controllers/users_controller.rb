class UsersController < ApplicationController
  before_action :authorize
	skip_before_action :authorize, only: [:create]
  
  def create
    user = User.create!(user_params)
    session[:user_id] = user.id
    render json: user, status: :created
  end

  def show
    render json: @user, status: :accepted
  end

  def update
    @user.update!(user_params)
    render json: @user, status: :accepted
  end

  private

  def user_params
    params.permit(:username, :email, :profile_img, :bio, :password, :password_confirmation)
  end
end
