class UserItinerary < ApplicationRecord
  belongs_to :user
  belongs_to :itinerary

  validates :is_owner, inclusion: {in: [true, false]}
  validates :is_favorite, inclusion: {in: [true, false]}
end
