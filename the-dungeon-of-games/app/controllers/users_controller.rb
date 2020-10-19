class UsersController < ApplicationController
    def index 
        @users = User.all
        # @user_games = UserGame.all
        render json: @users, include: {games:{}}
    end
end