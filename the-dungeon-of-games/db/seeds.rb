# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'rest-client'
require 'pry'
Category.destroy_all
Game.destroy_all
GameCategory.destroy_all
User.destroy_all
UserGame.destroy_all

cat = RestClient.get 'https://api.boardgameatlas.com/api/game/categories?pretty=true&client_id=5IKZiDA8Yq'

cat_array = JSON.parse(cat)["categories"]
cat_array.each do |category|
    Category.create(
        category_code: category["id"],
        name: category["name"]
    )
end 

game = RestClient.get "https://api.boardgameatlas.com/api/search?order_by=popularity&ascending=false&pretty=true&client_id=5IKZiDA8Yq"

game_array = JSON.parse(game)["games"]
game_array.each do |game|
    Game.create(
        name: game["name"],
        description: game["description"],
        picture_url: game["image_url"],
        price: game["price"],
        purchase_url: game["url"],
        number_of_ratings: game["num_user_ratings"],
        average_rating: game["average_user_rating"]
    )

    codes = game["categories"].collect{|cat| cat["id"]}

    codes.each do |code|
        blah = Category.find_by(category_code: code)
        if blah
            blah = blah.id
            game_id = Game.last.id
            #binding.pry
            GameCategory.create(
                game_id: game_id,
                category_id: blah
            )
        end 
       
    end 

end 

eddie = User.create(user_name: "Eddie")
billy = User.create(user_name: "Billy")
baller = User.create(user_name: "Baller")

UserGame.create(user_id: eddie.id, game_id: Game.first.id)
UserGame.create(user_id: billy.id, game_id: Game.first.id)

Game.all.each do |game|
    UserGame.create(user_id: baller.id, game_id: game.id)
end