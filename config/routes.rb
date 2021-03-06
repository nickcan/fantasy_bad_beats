Rails.application.routes.draw do
  root "beats#index"

  resources :users, only: [:show, :create, :update, :destroy]

  resources :beats, only: [:index, :create, :destroy, :edit, :update] do
    resources :comments, only: [:create, :destroy]
  end

  get "/login" => "sessions#new"
  post "/login" => "sessions#create"
  get "/signout" => "sessions#destroy"

  get "/beats/:id/upvote" => "beats#upvote"
  get "/comments/:id/upvote" => "comments#upvote"
  delete "votes/:id" => "votes#destroy"
end
