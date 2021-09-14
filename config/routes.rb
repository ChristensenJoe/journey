Rails.application.routes.draw do
  
  # Users Controller
  post '/signup', to: 'users#create'
  get '/me', to: 'users#show'
  # update '/user/:id', to: 'users#update'

  # Sessions Controller
  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'

  # Itineraries controller
  post '/itinerary', to: 'itineraries#create'
  # get '/itinerary/:username', to: 'itineraries#show'

  # Fallback Controller
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
  
end
