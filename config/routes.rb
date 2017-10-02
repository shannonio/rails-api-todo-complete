
Rails.application.routes.draw do

  namespace :api, defaults: { format: :json } do
    mount_devise_token_auth_for 'User', at: 'auth'
    resources :users do
      resources :lists
    end

    resources :lists do
      resources :items
    end

    resources :items, only: [:destroy, :update]
  end

  get "*path" => redirect("/?goto=%{path}")
end
