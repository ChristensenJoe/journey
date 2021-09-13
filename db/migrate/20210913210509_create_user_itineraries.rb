class CreateUserItineraries < ActiveRecord::Migration[6.1]
  def change
    create_table :user_itineraries do |t|
      t.boolean :is_owner
      t.boolean :is_favorite
      t.belongs_to :user, null: false, foreign_key: true
      t.belongs_to :itinerary, null: false, foreign_key: true

      t.timestamps
    end
  end
end
