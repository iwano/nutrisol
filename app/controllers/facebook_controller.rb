class FacebookController < ApplicationController

  def fetch
    access_token = params['accessToken']
    begin
      facebook_response = FbGraph::User.me(access_token).fetch
    rescue => error
      @error = error.message
      puts "Error #{@error}"
    end

    if facebook_response && facebook_response.email
      User.where(identifier: facebook_response.identifier).first_or_create
      @user = facebook_response
    end
  end
end
