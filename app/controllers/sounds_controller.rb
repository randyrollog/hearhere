class SoundsController < ApplicationController

  def index
    @sounds = Sound.all
  end

  def show
    @sound = Sound.find(params[:id])
  end

  def new
    @sound = Sound.new
    @user = User.find(params[:user_id])
  end

  def create
    @sound = Sound.create( sound_params ).merge(:user_id => current_user.id)
    redirect_to :action => "show"
  end

  def edit
    @sound = Sound.find(params[:id])
  end

  def update
    @sound = Sound.find(params[:id])
    if @sound.update(sound_params)
      redirect_to :action => "show", :id => @sound.id, :user_id => current_user.id
    else
      render 'edit'
    end
  end

  def destroy
    Sound.find(params[:id]).destroy
    redirect_to sounds_url
  end

  def download
    @sound= Sound.find(params[:id])
    send_file Paperclip.io_adapters.for(@sound.sound_file).path,
      :filename => @sound.sound_file_file_name, 
      :type => @sound.sound_file_content_type,
      :disposition => 'attachment', 
      :x_sendfile => true
  end

  private

  # Use strong_parameters for attribute whitelisting
  # Be sure to update your create() and update() controller methods.

  def sound_params
    params.require(:sound).permit(
      :sound_file,
      :sound_name,
      :description,
      :location,
      :user_id)
  end

end
