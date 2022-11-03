class ReviewsController < ApplicationController
    
    before_action :set_review, only: %i[destroy update]

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

    def update
        
        if @review.update(review_params)
            render json: @review
        else 
            render json: {errors: @review.errors.full_messages}
        end
    end

    def destroy
        @review.destroy
    end

    private 

    def set_review
        @review = Review.find(params[:id])
    end

    def review_params
        params.require(:review).permit(:content,:game_id,:rating)
    end


end
