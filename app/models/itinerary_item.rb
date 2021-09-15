class ItineraryItem < ApplicationRecord
  belongs_to :itinerary
  has_many :itinerary_item_categories, dependent: :destroy
  has_many :categories, through: :itinerary_item_categories

  validates :name, presence: true
  validates :location, presence: true
  validates :time, presence: true
  validates :itinerary_id, presence: true
end
