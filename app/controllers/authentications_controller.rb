class AuthenticationsController < ApplicationController
  before_action :authenticate_user, only: [:destroy]

  def new
    # session[:user_id] = User.first.id
    # Are they already logged in?
    if current_user
      redirect_to users_url
    else
      @user = User.new(user_name: params[:user_name])
      render :new
    end
  end

 def create
    user = User.where(user_name: params[:user][:user_name]).first

    if user
        # authenticate user
        if user.authenticate(params[:user][:password])
          session[:user_id] = user.id
          redirect_to user
        else
          flash.now.alert = "Unable to sign you in. Please try again."
          redirect_to new_user_url
        end
    else
      redirect_to new_user_url(user_name: params[:user][:user_name])
    end
  end

  def destroy
    session[:user_id] = nil
    redirect_to '/', notice: "You signed out."
  end

end