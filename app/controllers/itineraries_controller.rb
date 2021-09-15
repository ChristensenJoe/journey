class ItinerariesController < ApplicationController
    
    def index
        if params[:name]
            itineraries = Itinerary.where("name = ?", params[:name].split("_").join(" "))
            render json: itineraries, each_serializer: ItinerarySkeletonSerializer, status: :accepted
        else
            render json: Itinerary.all, status: :accepted
        end
    end

    def recent
        user = User.find(params[:user_id])
        render json: user.itineraries.order("updated_at DESC").limit(6), status: :accepted
    end

    def show
        itinerary = Itinerary.find(params[:id])
        render json: itinerary, include: ['itinerary_items', 'itinerary_items.categories'], status: :accepted
    end

    def create 
        itinerary = Itinerary.create!(itinerary_params)
        user_itinerary = UserItinerary.create!({**user_itinerary_params, itinerary_id: itinerary.id})
        render json: itinerary, status: :created
    end

    def destroy
        itinerary = Itinerary.find!(params[:id])
        itinerary.destroy
        head :no_content
    end

    private

    def itinerary_params
        params.permit(:name, :description, :category, :is_private)
    end

    def user_itinerary_params
        params.permit(:is_owner, :is_favorite, :user_id)
    end

end
