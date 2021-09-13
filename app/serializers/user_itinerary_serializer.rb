class UserItinerarySerializer < ActiveModel::Serializer
  attributes :id, :is_owner, :is_favorite
  has_one :user
  has_one :itinerary
end
