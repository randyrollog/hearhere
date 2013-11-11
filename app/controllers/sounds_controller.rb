class SoundsController < ApplicationController

  def index
    @sounds = Sound.all
  end

  def show
    @sound = Sound.find(params[:id])
  end

  def new
    @sound = Sound.new(sound_file_file_name: params[:sound_file_file_name])
  end

  def create
    @sound = Sound.create( sound_params )
    redirect_to sound_url(@sound)
  end

  private

  # Use strong_parameters for attribute whitelisting
  # Be sure to update your create() and update() controller methods.

  def sound_params
    params.require(:sound).permit(
      :sound_file,
      :sound_name,
      :description,
      :location)
  end

end
