class ItinerarySerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :category, :is_private

  has_many :itinerary_items


end
