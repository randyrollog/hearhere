require 'spec_helper'

describe SoundsController do
  let(:valid_attributes) { { "sound_name" => "test", "sound_file" => File.new } }
  let(:valid_session) { {} }

  describe "GET #index" do
    it 'renders the index template' do
      get :index
      expect(response).to render_template("index")
    end

    it "assigns @sounds" do
      sounds = Sound.all
      get :index
      expect(assigns(:sounds)).to eq(sounds)
    end
  end

  describe "GET #new" do
    it 'renders the new template' do
      get :new
      expect(response).to render_template("new")
    end
  end

  describe "GET #show" do
    it "responds to GET" do
      user = FactoryGirl.create(:user)
      sound = FactoryGirl.create(:sound, 
                          :sound_file => File.open('/Users/christopherspears/wdi/83746__braffe2__pen-writing.wav'))
      get :show, user_id: user.id, id: sound.id
      expect(response).to render_template("show")
    end
  end

  describe "POST #create" do 
    it 'creates a new sound' do
      sound = FactoryGirl.create(:sound => valid_attributes)
      expect { sound.sound_name }.to eq("test")
    end
  end

end
