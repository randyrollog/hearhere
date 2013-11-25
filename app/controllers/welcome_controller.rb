class WelcomeController < ApplicationController
	def index
    @disable_nav = true
    @sounds = Sound.all
  end
end