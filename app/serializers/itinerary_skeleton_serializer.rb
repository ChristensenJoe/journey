class ItinerarySkeletonSerializer < ActiveModel::Serializer
  attributes :id, :owner

  def owner
    user_itineraries = self.object.user_itineraries
    owner_itinerary = user_itineraries.filter do |user_itinerary|
      user_itinerary.is_owner
    end

    User.find(owner_itinerary[0].user_id).username
  end
end
