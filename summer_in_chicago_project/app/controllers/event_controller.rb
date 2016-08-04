class EventsController < ApplicationController
  get '/create' do
    erb :form
  end

  post '/create' do
    p session
    'success'

  end

end
