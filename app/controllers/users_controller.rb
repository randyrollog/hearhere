class UsersController < ApplicationController

  def new
    @user = User.new(user_name: params[:user_name])
  end

  def create
    @user = User.create(params[:user]
                .permit(:user_name, :location, :password, :password_confirmation))
    user = User.find_by(user_name: params[:user][:user_name])
    if user.authenticate(params[:user][:password])
      session[:user_id] = user.id
      redirect_to user
    end
  end

  def show
    @user = User.find(params[:id])
  end

end
