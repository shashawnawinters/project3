class UsersController < ApplicationController
 	

 get '/home' do
 	erb :home
 end	

  get '/?' do
 	 erb :event
  end

end
