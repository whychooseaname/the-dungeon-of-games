class CreateGames < ActiveRecord::Migration[6.0]
  def change
    create_table :games do |t|
      t.string :name
      t.text :description
      t.string :picture_url
      t.float :price, precision: 2
      t.string :purchase_url
      t.integer :number_of_ratings
      t.float :average_rating, precision: 2


      t.timestamps
    end
  end
end
