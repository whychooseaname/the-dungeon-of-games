class UserGame < ApplicationRecord
    belongs_to :user 
    belongs_to :game
    def self.watch(u, g)
        list = self.all.select{|ug| ug.game_id == g}
        list.select{|ug| ug.user_id == u}
    end
end
