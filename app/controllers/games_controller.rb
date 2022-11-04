class GamesController < ApplicationController
  before_action :set_game, only: %i[ show update destroy ]

  # GET /games
  def index
    @games = Game.limit(20)

    render json: @games, status: :ok
  end

  # GET /games/1
  def show
    render json: @game
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_game
      @game = Game.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def game_params
      params.require(:game).permit(:title, :released, :platforms, :genres)
    end
end
