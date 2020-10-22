Rails.application.routes.draw do
  resources :games
  resources :users
  resources :categories
  resources :user_games, :only => [:index, :create]
  delete 'user_games', :to => 'user_games#destroy'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
