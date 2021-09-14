class CreateItineraryItems < ActiveRecord::Migration[6.1]
  def change
    create_table :itinerary_items do |t|
      t.string :name
      t.string :location
      t.string :content
      t.string :time
      t.belongs_to :itinerary, null: false, foreign_key: true

      t.timestamps
    end
  end
end
