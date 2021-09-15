class ItinerarySerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :category, :is_private, :updated_at

  has_many :itinerary_items
end
