require 'spec_helper'

describe Sound do
  it 'works with FactoryGirl' do
    expect(FactoryGirl.create(:sound)).to be_valid
  end

end
