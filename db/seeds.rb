puts "Starting seed..."

puts "Seeding categories..."
Category.create(name: 'Restaurants')
Category.create(name: 'Sights')
Category.create(name: 'Landmarks')
Category.create(name: 'Parks')
Category.create(name: 'Museums')

puts "seeding users"
demoUser = User.create(username: "demo", email: "demo@journey.com", password: "password", profile_img: "https://www.notion.so/cdn-cgi/image/w=2048,q=100/https://images.ctfassets.net/spoqsaf9291f/4grR0MZ3Br7Z43zEXZzAMU/9263de5ee31be867003932c5f166e897/E6B7C84D-92BC-49B9-B0E1-149B29BECC0D.png")
isaac = User.create(username: "Isaac", email: "isaac@journey.com", password: "password", profile_img: "https://www.notion.so/cdn-cgi/image/w=2048,q=100/https://images.ctfassets.net/spoqsaf9291f/2DkoHHVGtQ8FYiIvrUxohP/9b95d4f68af2a911c499b8e687d47e6e/Fernando_Urbina.png")
joe = User.create(username: "Joe", email: "joe@journey.com", password: "password", profile_img: "https://www.notion.so/cdn-cgi/image/w=2048,q=100/https://images.ctfassets.net/spoqsaf9291f/4yAglxCnzzsuslSDNf6MLL/4abf6d9192ee32e20ec3f60d7763c855/Sam_Corcos.png")
john = User.create(username: "John", email: "jyk595@journey@gmail.com", password: "password", profile_img: "https://www.notion.so/cdn-cgi/image/w=2048,q=100/https://images.ctfassets.net/spoqsaf9291f/3sGFch8Vx5vDoyqWW8o3Cm/36b7595092af814de645c897d0654e14/kendall.png")

puts "seeding itineraries"
Itinerary.create(name: "Mid West -> west coast vibes", description: "a trip", category:"🕴️", is_private: false)
Itinerary.create(name: "New York", description: "A really cool trip", category:"🕴️", is_private: false)
Itinerary.create(name: "Mexico", description: "A really cool trip", category:"🕴️", is_private: false)
Itinerary.create(name: "Hawaii", description: "A really cool trip", category:"🕴️", is_private: false)

puts "seeding user_itineraries"
UserItinerary.create(is_owner: true, is_favorite: false, user_id: demoUser.id, itinerary_id: Itinerary.first.id)
UserItinerary.create(is_owner: true, is_favorite: false, user_id: isaac.id, itinerary_id: Itinerary.second.id)
UserItinerary.create(is_owner: true, is_favorite: false, user_id: joe.id, itinerary_id: Itinerary.third.id)
UserItinerary.create(is_owner: true, is_favorite: false, user_id: john.id, itinerary_id: Itinerary.fourth.id)

puts "Seeding itinerary_items"
# west coast
a = ItineraryItem.create(name: "the last bookstore", content: "a cool place!", time: "1pm", location: "34.0476682 -118.2497228", itinerary_id: Itinerary.first.id)
c = ItineraryItem.create(name: "zion national park", content: "a cool place!", time: "3pm", location: "37.348099 -113.089996", itinerary_id: Itinerary.first.id)
d = ItineraryItem.create(name: "alcatraz, san francisco", content: "a cool place!", time: "4pm", location: "37.828125 -122.422844", itinerary_id: Itinerary.first.id)
e = ItineraryItem.create(name: "El Capitan", content: "a cool rock!", time: "5pm", location: "37.733952 -119.637756", itinerary_id: Itinerary.first.id)
# New York
b = ItineraryItem.create(name: "Statue of liberty", content: "a cool place!", time: "2pm", location: "40.689247, -74.044502", itinerary_id: Itinerary.first.id)
f = ItineraryItem.create(name: "Empire state building", content: "a cool rock!", time: "5pm", location: "40.748817 -73.985428", itinerary_id: Itinerary.first.id)
g = ItineraryItem.create(name: "One World Trade Center", content: "a cool rock!", time: "5pm", location: "40.712742 -74.013382", itinerary_id: Itinerary.first.id)
h = ItineraryItem.create(name: "Museum of Modern Art", content: "a cool rock!", time: "5pm", location: "40.761509 -73.978271", itinerary_id: Itinerary.first.id)
# Mexico
i = ItineraryItem.create(name: "Teotihuacán", content: "a cool landmark!", time: "5pm", location: "19.689722 -98.860833", itinerary_id: Itinerary.first.id)
j = ItineraryItem.create(name: "Xochimilco", content: "a cool tour!", time: "5pm", location: "19.25465 -99.10356", itinerary_id: Itinerary.first.id)
k = ItineraryItem.create(name: "Grutas de Loltún, Yucatán", content: "a cool rock!", time: "5pm", location: "20.253422 -89.455528", itinerary_id: Itinerary.first.id)
l = ItineraryItem.create(name: "Iglesia de San Pedro Vaquerias", content: "a cool rock!", time: "5pm", location: "20.378859 -98.571442", itinerary_id: Itinerary.first.id)
#hawaii
m = ItineraryItem.create(name: "Hawaii Volcanoes National Park", content: "a cool rock!", time: "5pm", location: "19.479488 -155.602829", itinerary_id: Itinerary.first.id)
n = ItineraryItem.create(name: "peral harbour", content: "a cool rock!", time: "5pm", location: "21.339884 -157.970901", itinerary_id: Itinerary.first.id)
o = ItineraryItem.create(name: "Hanalei Bay", content: "a cool rock!", time: "5pm", location: "22.21 -159.5091667", itinerary_id: Itinerary.first.id)
pp = ItineraryItem.create(name: "North Shore", content: "a cool rock!", time: "5pm", location: "21.5616589 -158.071598", itinerary_id: Itinerary.first.id)

puts "seeding itinerary_item_categories"
ItineraryItemCategory.create(itinerary_item_id: a.id, category_id: Category.ids.sample)
ItineraryItemCategory.create(itinerary_item_id: b.id, category_id: Category.ids.sample)
ItineraryItemCategory.create(itinerary_item_id: c.id, category_id: Category.ids.sample)
ItineraryItemCategory.create(itinerary_item_id: d.id, category_id: Category.ids.sample)
ItineraryItemCategory.create(itinerary_item_id: e.id, category_id: Category.ids.sample)
ItineraryItemCategory.create(itinerary_item_id: f.id, category_id: Category.ids.sample)
ItineraryItemCategory.create(itinerary_item_id: g.id, category_id: Category.ids.sample)
ItineraryItemCategory.create(itinerary_item_id: h.id, category_id: Category.ids.sample)
ItineraryItemCategory.create(itinerary_item_id: i.id, category_id: Category.ids.sample)
ItineraryItemCategory.create(itinerary_item_id: j.id, category_id: Category.ids.sample)
ItineraryItemCategory.create(itinerary_item_id: k.id, category_id: Category.ids.sample)
ItineraryItemCategory.create(itinerary_item_id: l.id, category_id: Category.ids.sample)
ItineraryItemCategory.create(itinerary_item_id: m.id, category_id: Category.ids.sample)
ItineraryItemCategory.create(itinerary_item_id: n.id, category_id: Category.ids.sample)
ItineraryItemCategory.create(itinerary_item_id: o.id, category_id: Category.ids.sample)
ItineraryItemCategory.create(itinerary_item_id: pp.id, category_id: Category.ids.sample)

puts "Seeding complete!"