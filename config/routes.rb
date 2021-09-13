Rails.application.routes.draw do
  
  # Users Controller
  post '/signup', to: 'users#create'
  get '/me', to: 'users#show'

  # Sessions Controller
  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'

  # Fallback Controller
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
  
end
