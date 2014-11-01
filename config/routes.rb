Rails.application.routes.draw do
  root 'beats#index'

  resources :users, only: [:show, :create, :update, :destroy] do
    resources :beats, only: :index
  end

  resources :beats, only: [:index, :create, :destroy, :edit, :update] do
    resources :comments, only: [:create]
  end

  get "/login" => "sessions#new"
  post "/login" => "sessions#create"
  get "/signout" => "sessions#destroy"
end
