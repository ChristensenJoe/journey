class ItineraryItemCategory < ApplicationRecord
  belongs_to :itinerary_item
  belongs_to :category

  validates :category_id, presence: true
  validates :itinerary_item_id, presence: true
end
