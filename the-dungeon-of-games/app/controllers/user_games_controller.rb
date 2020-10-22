class UserGamesController < ApplicationController
    def index
        @ugames = UserGame.all
        render json: @ugames, include: {user: {}, game: {}}
    end

    def create
        UserGame.create(user_id: post_params[:user_id], game_id: post_params[:game_id])
    end

    def destroy
        @userGame = UserGame.watch(post_params[:user_id], post_params[:game_id])
        # binding.pry
        @userGame.last.delete
    end

    private
    def post_params
        params.require(:user_game).permit(:user_id, :game_id)
    end
end
