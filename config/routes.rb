Rails.application.routes.draw do
  resources :reviews
  resources :user_games
  resources :games, only:[:show,:index] do
    resources:reviews, only:[:index]
  end
  resources :questions
  resources :users
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  get '*path', to: 'fallback#index', constraints: ->(req) { !req.xhr? && req.format.html? }

  get "/me", to: "users#show"
  post "/signup", to: "users#create"
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
  
end
