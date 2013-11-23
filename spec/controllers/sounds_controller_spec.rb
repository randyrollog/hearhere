require 'spec_helper'

describe SoundsController do
  test_files_path = Rails.root.join('spec', 'controllers', 'test_files', 'test.txt')
  let(:valid_attributes) { { "sound_name" => "test", 
                             "sound_file" => File.new(test_files_path, "r") } }
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

  # need a user because of nested resources

  describe "GET #new" do
    it 'renders the new template' do
      user = FactoryGirl.create(:user)
      get :new, user_id: user.id
      expect(response).to render_template("new")
    end
  end

  describe "GET #show" do
    it "responds to GET" do
      user = FactoryGirl.create(:user)
      sound = FactoryGirl.create(:sound, valid_attributes)
      get :show, user_id: user.id, id: sound.id
      expect(response).to render_template("show")
    end
  end

  describe "POST #create" do 
    it 'creates a new sound' do
      user = FactoryGirl.create(:user)
      sound = FactoryGirl.create(:sound, valid_attributes)
      name = sound.sound_name.to_s
      expect(name).to eq("test")
    end
  end

end
