class Category < ApplicationRecord
    has_many :game_categories
    has_many :games, through: :game_categories

    def self.billy
        self.all.select{|cat| cat.games.count > 8}.count
    end 
        
end
