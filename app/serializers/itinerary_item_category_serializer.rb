class ItineraryItemCategorySerializer < ActiveModel::Serializer
  attributes :id
  has_one :itinerary_item
  has_one :category
end
