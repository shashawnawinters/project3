require 'bcrypt'

class UsersController < ApplicationController
 		
  get '/?' do
 	 erb :event
  end

  get '/register/?' do
    erb :register
  end

  post '/register' do
    password = BCrypt::Password.create(params['password'])

 	  user = User.create username: params['username'], email: params['email'], password: password
    if user
      'User was added'
       p user
       erb :event
    else
      'Error'
    end
  end
end
