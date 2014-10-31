Rails.application.routes.draw do
  root 'beats#index'

  resources :users, only: [:show, :update, :destroy] do
    resources :beats, only: :index
  end

  resources :beats, only: [:index, :create, :destroy, :update] do
    resources :comments, only: [:create]
  end

  get "/login" => "sessions#new"
  post "/login" => "sessions#create"
  get "/logout" => "sessions#destroy"
end
