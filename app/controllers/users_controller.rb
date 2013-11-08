class UsersController < ApplicationController
  
  def index
    @users = User.all
  end

  def show
    @user = User.find(params[:id])
  end

  def new
    @user = User.new(user_name: params[:user_name])
  end

  def create
    @user = User.create(params[:user]
                .permit(:user_name, :password, :password_confirmation))
    redirect_to authentications_new_url(user_name: params[:user][:user_name])
  end

end
