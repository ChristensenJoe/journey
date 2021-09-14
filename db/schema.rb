# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2021_09_14_170828) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "categories", force: :cascade do |t|
    t.string "name"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "itineraries", force: :cascade do |t|
    t.string "name"
    t.text "description"
    t.string "category"
    t.boolean "is_private"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "itinerary_item_categories", force: :cascade do |t|
    t.bigint "itinerary_item_id", null: false
    t.bigint "category_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["category_id"], name: "index_itinerary_item_categories_on_category_id"
    t.index ["itinerary_item_id"], name: "index_itinerary_item_categories_on_itinerary_item_id"
  end

  create_table "itinerary_items", force: :cascade do |t|
    t.string "name"
    t.string "location"
    t.string "content"
    t.string "time"
    t.bigint "itinerary_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["itinerary_id"], name: "index_itinerary_items_on_itinerary_id"
  end

  create_table "user_itineraries", force: :cascade do |t|
    t.boolean "is_owner"
    t.boolean "is_favorite"
    t.bigint "user_id", null: false
    t.bigint "itinerary_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["itinerary_id"], name: "index_user_itineraries_on_itinerary_id"
    t.index ["user_id"], name: "index_user_itineraries_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "username"
    t.string "email"
    t.string "profile_img"
    t.text "bio"
    t.string "password_digest"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  add_foreign_key "itinerary_item_categories", "categories"
  add_foreign_key "itinerary_item_categories", "itinerary_items"
  add_foreign_key "itinerary_items", "itineraries"
  add_foreign_key "user_itineraries", "itineraries"
  add_foreign_key "user_itineraries", "users"
end
