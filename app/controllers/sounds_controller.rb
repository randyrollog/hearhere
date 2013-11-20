class SoundsController < ApplicationController
  respond_to :html, :json
  # responds with (@sounds)

  def index
    @sounds = Sound.all

    if params[:tag]
      @sounds = Sound.tagged_with(params[:tag])
    else
      @sounds = Sound.all
    end
  end

  def show
    @sound = Sound.find(params[:id])
  end

  # Renders form
  def search
  end

  # Displays results
  def display_results
    @sounds = Sound.search(params[:search])
    render :search_results
  end

  # Give the sound a rating
  # For html
  def rate
    rating = current_user.sound_ratings.new(sound_id: params[:id], value: params[:rating])
    if rating.save
      redirect_to '/sounds', notice: "Thank you for voting."
    else
      redirect_to '/sounds', alert: "Unable to vote, perhaps you already did."
    end
  end

  # For json
  def rate_json
    rating = current_user.sound_ratings.new(sound_id: params[:id], value: params[:rating])
    if rating.save
      render :status => :ok, :json => { :status => 'SUCCESS' }
    else
      render :status => 422, :json => { :status => 'FAILED' }.to_json
    end
  end

  def new
    @sound = Sound.new
    @user = User.find(params[:user_id])
  end

  def create
    @sound = current_user.sounds.create( sound_params )
    redirect_to :action => "show", :id => @sound.id, :user_id => current_user
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
      :tag_list
    )
  end

end
