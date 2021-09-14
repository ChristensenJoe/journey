Rails.application.routes.draw do
  
  # Users Controller
  post '/signup', to: 'users#create'
  get '/me', to: 'users#show'
  patch '/users/:id', to: 'users#update'

  # Sessions Controller
  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'

  # Itineraries controller
  get '/itineraries', to: 'itineraries#index'
  post '/itineraries', to: 'itineraries#create'
  get '/itineraries/:id', to: 'itineraries#show'

  #ItineraryItems Controller
  post '/itineraries/:itinerary_id/itinerary_items', to: 'itinerary_items#create'

  # Fallback Controller
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
  
end
