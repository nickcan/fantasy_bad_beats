Rails.application.routes.draw do
  root 'application#index'
  get '*path' => 'application#index'

  # resources :users, only: [:show, :update, :destroy] do
  #   resources :beats, only: :index
  # end

  # resources :beats, only: [:index, :create, :destroy, :update] do
  #   resources :comments, only: [:create]
  # end
end
