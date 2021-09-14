class ItinerariesController < ApplicationController
    
    def create 
        itinerary = Itinerary.create!(itinerary_params)
        user_itinerary = UserItinerary.create!({**user_itinerary_params, itinerary_id: itinerary.id})
        render json: itinerary, status: :created
    end

    private

    def itinerary_params
        params.permit(:name, :description, :category, :is_private)
    end

    def user_itinerary_params
        params.permit(:is_owner, :is_favorite, :user_id)
    end

end
