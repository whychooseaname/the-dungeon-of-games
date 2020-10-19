class Game < ApplicationRecord
    has_many :user_games
    has_many :ratings
    has_many :game_categories
    has_many :users, through: :user_games
    has_many :categories, through: :game_categories
end
