require 'bcrypt'

class UsersController < ApplicationController
 		

  get '/register/?' do
    erb :register
  end  

  get '/login/?' do
    erb :login

    p session
    if session[:is_logged_in]
      'Hello ' 
    else
      'Unauthorized Access'
    end    
  end

  post '/login/?' do
    user = User.find_by username: params['username']

    if user
      password = BCrypt::Password.new(user.password)

      if password == params['password']
        session[:is_logged_in] = true
        session[:user_id] = user.id
        p session
        'Welcome Back ' + user.username
      else
        'Incorrect Username or Password'
      end
    else
      'Username could not be found'
    end
  end

  get '/logout/?' do
    session[:is_logged_in] = false
    session[:user_id] = nil
    p session
    'You are logged out'
  end

  get '/membersonly/?' do
    p session
    if session[:is_logged_in]
      'Hello ' 
    else
      'Unauthorized Access'
    end
  end

  get '/:id/?' do
    erb :profile
  end

  post '/register/?' do
    password = BCrypt::Password.create(params['password'])
    if params['username'].length > 1 && params['email'].length >  6
      user  = User.find_by username: params['username']
      email = User.find_by email: params['email']
      if user || email
        'Username already taken or Email already registered'
      else
        user = User.create username: params['username'], email: params['email'], password: password
        if user 
          'User was added'
          session[:is_logged_in] = true
          session[:user_id] = user.id
          p session
          user.to_json
          
        else
          'Error'
        end
      end
    else 
      'Username or Email not long enough' 
    end  
  end
end
