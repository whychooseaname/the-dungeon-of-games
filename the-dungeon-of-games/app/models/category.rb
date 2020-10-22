class Category < ApplicationRecord
    has_many :game_categories
    has_many :games, through: :game_categories

    def self.short
        self.all.select{|cat| cat.games.count > 8}
    end 
end
