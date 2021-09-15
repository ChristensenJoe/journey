class ItineraryItemsController < ApplicationController
    
    def create
        itinerary = Itinerary.find_by(id: params[:itinerary_id])
        itinerary_item = itinerary.itinerary_items.create!(itinerary_item_params)
        params[:categories].each do |category_name|
            category_id = Category.find_by(name: category_name).id
            ItineraryItemCategory.create!(itinerary_item_id: itinerary_item.id, category_id: category_id)
        end

        render json: itinerary_item, status: :created
    end

    def destroy
        itinerary_item = ItineraryItem.find(params[:id])
        itinerary_item.destroy
        head :no_content
    end

    private

    def itinerary_item_params
        params.permit(:name, :location, :content, :time)
    end
end
