class Itinerary < ApplicationRecord
    has_many :user_itineraries
    has_many :users, through: :user_itineraries

    validates :name, presence: true
    validates :description, presence: true
    validates :is_private, inclusion: {in: [true, false]}
end
