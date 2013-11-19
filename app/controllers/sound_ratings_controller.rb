class SoundRatingsController < ApplicationController

  private

  # Use strong_parameters for attribute whitelisting
  # Be sure to update your create() and update() controller methods.

  
  def sound_params
    params.require(:sound_ratings).permit(
      :value, 
      :sound, 
      :sound_id
    )
  end
end
