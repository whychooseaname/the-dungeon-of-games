class GamesController < ApplicationController

    def index
        @games = Game.all 
        render json: @games, include: {users: {}, categories: {}}
    end
    
    def show
        @game = Game.find(params[:id])
        render json: @game, include: {users: {}, categories: {}}
    end
    
    def update
        @game = Game.find(params[:id])
        # binding.pry
        @game.update(number_of_ratings: post_params[:number_of_ratings], average_rating: post_params[:average_rating])
        render json: @game, include: {users: {}, categories: {}}
    end

    private
    def post_params
        params.require(:game).permit(:number_of_ratings, :average_rating)
    end
end
