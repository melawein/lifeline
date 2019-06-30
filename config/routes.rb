Rails.application.routes.draw do

  devise_for :users

  resources :days, only: [:index, :show, :edit, :update]
  resources :moods, only: [:new, :create]
  resources :pains, only: [:new, :create]
  resources :exercises, only: [:new, :create]
  resources :stats, only: [:index]
  root to: 'pages#home'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
