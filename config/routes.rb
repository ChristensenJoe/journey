Rails.application.routes.draw do
  
  # Users Controller
  post '/signup', to: 'users#create'
  get '/me', to: 'users#show'
  patch '/users/:id', to: 'users#update'

  # Sessions Controller
  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'

  # Itineraries Controller
  get '/itineraries', to: 'itineraries#index'
  post '/itineraries', to: 'itineraries#create'
  delete '/itineraries/:id', to: 'itineraries#destroy'
  get '/itineraries/:id', to: 'itineraries#show'
  get '/users/:user_id/itineraries', to: 'itineraries#recent'

  # ItineraryItems Controller
  post '/itineraries/:itinerary_id/itinerary_items', to: 'itinerary_items#create'

  # Categories Controller
  get '/categories', to: 'categories#index'

  # ItineraryItemCategories Controller
  post '/itinerary_item_categories/:itinerary_id', to: 'itinerary_item_categories#create'

  # Fallback Controller
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
  
end
