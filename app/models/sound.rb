class Sound < ActiveRecord::Base
  belongs_to :user

  # for paperclip
  has_attached_file :sound_file
  
end
