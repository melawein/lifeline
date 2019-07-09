Rails.application.routes.draw do

  devise_for :users

  resources :days, only: [:index, :show, :edit, :update] do
    collection do
      get ':year/:month/:date' => 'my_calendar#show', :constraints => { :year => /\d{4}/, :month => /\d{1,2}/, :day => /\d{1,2}/ }
    end
  end
  get '/mood/stats', to: 'stats#mood_stats', as: 'mood_stats'
  get '/pain/stats', to: 'stats#pain_stats', as: 'pain_stats'
  get '/exercise/stats', to: 'stats#exercise_stats', as: 'exercise_stats'


  resources :moods, only: [:new, :create, :destroy]
  resources :pains, only: [:new, :create, :destroy]
  resources :exercises, only: [:new, :create, :destroy]
  resources :sleeps, only: [:new, :create, :destroy]
  resources :stats, only: [:all_stats]
  resources :journals
  root to: 'pages#home'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
