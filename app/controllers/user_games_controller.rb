class UserGamesController < ApplicationController

    def index
        @user_games = current_user.user_games
        render json: @user_games
    end

    def create 
        @user_game = current_user.user_games.new(user_games_params)
        if @user_game.save
            render json:@user_game, status: :created
        else
            render json: @user_game.errors, status: :unprocessable_entity
        end
    end

    private
    def user_games_params
        params.permit(:game_id)
    end

end
