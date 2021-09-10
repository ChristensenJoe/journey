Rails.application.routes.draw do
    namespace :api do
    get '/hello', to: "application#hello_world"
  end

  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
