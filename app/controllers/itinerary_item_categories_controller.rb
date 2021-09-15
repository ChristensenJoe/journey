class ItineraryItemCategoriesController < ApplicationController

  def create
    itineraryItemCategory = ItineraryItemCategory.create(itinerary_item_categories_params)
  end

  private

  def itinerary_item_categories_params
    params.permit()
  end

end
