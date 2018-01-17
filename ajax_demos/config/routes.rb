Rails.application.routes.draw do
  resources :cats, only: [:create, :index]
  resources :likes, only: [:create, :destroy]
end
