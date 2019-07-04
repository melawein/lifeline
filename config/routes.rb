Rails.application.routes.draw do

  devise_for :users

  resources :days, only: [:index, :show, :edit, :update] do
    collection do
      get ':year/:month/:date' => 'my_calendar#show', :constraints => { :year => /\d{4}/, :month => /\d{1,2}/, :day => /\d{1,2}/ }
    end
  end

  resources :moods, only: [:new, :create, :destroy]
  resources :pains, only: [:new, :create, :destroy]
  resources :exercises, only: [:new, :create, :destroy]
  resources :sleeps, only: [:new, :create, :destroy]
  resources :stats, only: [:index]
  root to: 'pages#home'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
