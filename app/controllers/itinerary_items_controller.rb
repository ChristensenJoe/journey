class ItineraryItemsController < ApplicationController
    
    def create
        itinerary = Itinerary.find(params[:itinerary_id])
        itinerary_item = itinerary.itinerary_items.create!(itinerary_item_params)
        params[:categories].each do |category_name|
            category_id = Category.find_by(name: category_name).id
            ItineraryItemCategory.create!(itinerary_item_id: itinerary_item.id, category_id: category_id)
        end

        render json: itinerary_item, status: :created
    end

    def show
        itinerary_item = ItineraryItem.find(params[:id])
        render json: itinerary_item, status: :accepted
    end

    def update
        itinerary_item = ItineraryItem.find(params[:id])
        itinerary_item.update!(itinerary_item_params)
        itinerary_item.categories.destroy_all
        params[:categories].each do |category_name|
            category_id = Category.find_by(name: category_name).id
            itinerary_item.itinerary_item_categories.create!(category_id: category_id)
        end
        render json: itinerary_item, status: :accepted

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
