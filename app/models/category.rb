class Category < ApplicationRecord
    has_many :itinerary_item_categories
    has_many :itinerary_items, through: :itinerary_item_categories

    validates :name, presence: true
end
