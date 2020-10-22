class CategoriesController < ApplicationController
    
    def index
        @categories = Category.short 
        render json: @categories, include: {games: {}}
    end
    
    def show
        @category = Category.find(params[:id])
        render json: @category, include: {games: {}}
    end
end