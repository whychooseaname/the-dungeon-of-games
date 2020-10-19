class GameCategory < ApplicationRecord
    belongs_to :games
    belongs_to :categories
end
