class CreateItineraries < ActiveRecord::Migration[6.1]
  def change
    create_table :itineraries do |t|
      t.string :name
      t.text :description
      t.string :category
      t.boolean :is_private

      t.timestamps
    end
  end
end
