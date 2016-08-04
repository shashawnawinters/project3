class EventsController < ApplicationController
  get '/create' do 
    erb :form
  end
end
