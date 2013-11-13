require 'spec_helper'

describe Sound do
  it 'needs a sound file' do
    sound = Sound.create(:sound_name =>'test',
                         :description =>'testing Sound',
                         :location =>'Santa Monica',
                         :sound_file => nil)
    expect(sound).to be_invalid
  end

end
