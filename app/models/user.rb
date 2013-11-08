class User < ActiveRecord::Base
	has_many :sounds, :tags
end
