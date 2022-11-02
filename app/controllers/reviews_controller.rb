class ReviewsController < ApplicationController
    def index
        if params[:game_id]
            game = Game.find(params[:game_id])
            @reviews = game.reviews
        else
            @reviews = Review.all
        end
        render json: @reviews 
    end

    def create
        @review = current_user.reviews.new(review_params)
        
        if @review.save
            render json: @review, status: :created
        else
            render json: { errors: @review.errors.full_messages}, status: :unprocessable_entity
        end
    end

    def destroy
        @review.destroy
    end

    private 

    def set_review
        @review = review.find(params[:id])
    end

    def review_params
        params.require(:review).permit(:content,:game_id)
    end


end
