class CreateItineraryItemCategories < ActiveRecord::Migration[6.1]
  def change
    create_table :itinerary_item_categories do |t|
      t.belongs_to :itinerary_item, null: false, foreign_key: true
      t.belongs_to :category, null: false, foreign_key: true

      t.timestamps
    end
  end
end
