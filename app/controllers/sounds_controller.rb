class SoundsController < ApplicationController

  def index
    @sounds = Sound.all
  end

  def show
    @sound = Sound.find(params[:id])
  end

  def create
    @sound = Sound.create( sound_params )
  end

  private

  # Use strong_parameters for attribute whitelisting
  # Be sure to update your create() and update() controller methods.

  def sound_params
    params.require(:sound).permit(:sound_file)
  end

end
