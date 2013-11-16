class Sound < ActiveRecord::Base
  belongs_to :user

  # for paperclip
  has_attached_file :sound_file,
                    :s3_domain_url => "hearherebucket.s3.amazonaws.com",
                    :storage => :s3,
                    :bucket => 'hearherebucket',
                    :s3_permissions => :public_read,
                    :s3_protocol => "http",
                    :encode => 'utf8'

  # do not create a sound unless a sound file
  # is present
  validates_attachment_presence :sound_file
  # maybe validate content type?
  # validates_attachement_content_type :sound_file, :content_type => ['sound/wav','sound/aiff']
  
end
