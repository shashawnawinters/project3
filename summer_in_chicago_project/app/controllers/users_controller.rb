require 'bcrypt'

class UsersController < ApplicationController
 		

  get '/register/?' do
    erb :register
  end

  post '/register/?' do
    password = BCrypt::Password.create(params['password'])
    if params['username'].length > 4 && params['email'].length >  6
      user = User.create username: params['username'], email: params['email'], password: password

      if user 
        'User was added'
         p user
         erb :event
      else
        'Error'
      end
    else 
      'Username or Email not long enough' 
    end

 	  
  end  

  get '/login/?' do
    erb :login      
  end

  post '/login/?' do
    user = User.find_by username: params['username']

    if user
      password = BCrypt::Password.new(user.password)

      if password == params['password']
        'Welcome Back'
      else
        'Incorrect Username or Password'
      end
    else
      'Username could not be found'
    end
    
  end

  get '/' do
    erb :event
  end



end
