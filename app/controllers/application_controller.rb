class ApplicationController < ActionController::API
    
    include ActionController::Cookies
    
    def current_user
        @current_user ||= User.find_by(id: session[:user_id])
    end

    def authentication
        render json: { error: 'must be logged in'}, status: :unauthorized unless current_user
      end

end
