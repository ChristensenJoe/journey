class ItinerarySerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :category, :is_private
end
