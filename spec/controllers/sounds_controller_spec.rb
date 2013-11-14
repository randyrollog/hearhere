require 'spec_helper'

describe SoundsController do
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
      sound = FactoryGirl.create(:sound, 
                                 :sound_file => File.open('/Users/christopherspears/wdi/83746__braffe2__pen-writing.wav'))
      get :show, id: sound.id
      expect(response).to render_template("show")
    end
  end

  # describe "POST #create" do

  #   it 'creates a new sound' do 
  #     tester_sound = FactoryGirl.create(:sound,
  #                                       :sound_name => 'test',
  #                                       :sound_file => File.open('/Users/christopherspears/wdi/83746__braffe2__pen-writing.wav'))
  #     post :create, sound: tester_sound
  #     expect(Sound.last.sound_name).to eq(tester_sound[:sound_name])
  #   end
  # end

  describe "POST #create" do 
    it 'creates a new sound' do 
      tester_hash = {:sound_name => 'test',
                     :sound_file => {:content_type = nil,
                                     :headers = nil,
                                     :original_filename = nil,
                                     :tempfile = nil}
                    }
      post :create, sound: tester_hash
      expect(Sound.last.sound_name).to eq(tester_hash[:sound_name])
    end
  end

end
