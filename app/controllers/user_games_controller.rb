class UserGamesController < ApplicationController
    wrap_parameters false
    before_action :authentication
    before_action :set_user_game, only: %i[destroy]
    

    def index
        @user_games = current_user.user_games
        render json: @user_games, status: :ok
    end

    def create 
        @user_game = current_user.user_games.new(user_games_params)
        if @user_game.save
            render json:@user_game, status: :created
        else
            render json: @user_game.errors, status: :unprocessable_entity
        end
    end

    def destroy
        @user_game.destroy
    end

    private

    def set_user_game
        @user_game = UserGame.find(params[:id])
    end

    def user_games_params
        params.permit(:game_id)
    end


end
