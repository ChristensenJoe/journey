class ItineraryItemSerializer < ActiveModel::Serializer
  attributes :id, :name, :location, :content, :time
  has_one :itinerary
  has_many :categories
end
