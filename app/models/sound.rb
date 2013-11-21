class Sound < ActiveRecord::Base
  belongs_to :user
  has_many :sound_ratings
  
  acts_as_taggable

  # for paperclip
  has_attached_file :sound_file,
                    :s3_domain_url => "hearherebucket.s3.amazonaws.com",
                    :bucket => 'hearherebucket',
                    :s3_permissions => :public_read,
                    :encode => 'utf8'

  # do not create a sound unless a sound file
  # is present
  validates_attachment_presence :sound_file
  # maybe validate content type?
  # validates_attachement_content_type :sound_file, :content_type => ['sound/wav','sound/aiff']


  def ratings
    read_attribute(:ratings) || sound_ratings.average(:value)
  end

  def self.search(search)
    search_condition = "%" + search + "%"
    # use search
    search_results = where('sound_name LIKE ? 
           OR description LIKE ?
           OR location LIKE ?', search_condition, search_condition, search_condition)
    # use tags
    tag_results = tagged_with(search)
    search_results + tag_results
  end

end
