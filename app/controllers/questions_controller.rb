class QuestionsController < ApplicationController
    before_action :authentication


    def index
        @questions = Question.all
        render json: @questions
    end
end
