class SoundsController < ApplicationController

  def index
    @sounds = Sound.all
  end

  def show
    @sound = Sound.find(params[:id])
  end

  def new
    @sound = Sound.new
  end

  def create
    @sound = Sound.create( sound_params )
    redirect_to sound_url(@sound)
  end

  def edit
    @sound = Sound.find(params[:id])
  end

  def update
    @sound = Sound.find(params[:id])
    if @sound.update(sound_params)
      redirect_to sound_url(@sound)
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
    send_data @sound.sound_file,
      :filename => @sound.sound_file_file_name, 
      :type => @sound.sound_file_content_type,
      :disposition => 'attachment', 
      :x_sendfile => true
  end

  # def download_url(sound)
  #   s3 = AWS::S3.new
  #   bucket = s3.buckets['hearherebucket']
  #   object = bucket.objects['/sounds/sound_files/000/000/005/original/83746__braffe2__pen-writing.wav']
  #   object.url_for(:get, { 
  #     expires: 10.minutes,
  #     response_content_disposition: 'attachment;'
  #   }).to_s
  # end

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
