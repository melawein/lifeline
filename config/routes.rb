Rails.application.routes.draw do
  get 'stats/index'
  get 'pains/new'
  get 'pains/create'
  get 'moods/new'
  get 'moods/create'
  get 'exercises/new'
  get 'exercises/create'
  get 'days/index'
  get 'days/show'
  get 'days/edit'
  get 'days/update'
  devise_for :users
  root to: 'pages#home'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
