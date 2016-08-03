class HomeController < ApplicationController
  
  get '/' do 
    erb :event
  end

  post  '/' do 
    p params.to_json

    'this post request worked'
  end
end
