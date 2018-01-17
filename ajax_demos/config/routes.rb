Rails.application.routes.draw do
  resources :cats, only: [:create, :index] do
    resource :like, only: [:create, :destroy]

    get 'search', on: :collection
  end
end
