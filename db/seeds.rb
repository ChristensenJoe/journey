puts "🌱 Starting seed..."

puts "Seeding categories..."
restaurants = Category.create(name: 'Restaurants')
sights = Category.create(name: 'Sights')
landmarks = Category.create(name: 'Landmarks')
parks = Category.create(name: 'Parks')
museums = Category.create(name: 'Museums')

puts "Seeding users..."
demoUser = User.create(username: "demo", email: "demo@journey.com", password: "password", profile_img: "https://www.notion.so/cdn-cgi/image/w=2048,q=100/https://images.ctfassets.net/spoqsaf9291f/4grR0MZ3Br7Z43zEXZzAMU/9263de5ee31be867003932c5f166e897/E6B7C84D-92BC-49B9-B0E1-149B29BECC0D.png")

puts "Seeding itineraries..."
westcoastitinerary = Itinerary.create(name: "west coast vibes", description: "The West Coast usually refers to the contiguous coastal states of California, Oregon, and Washington because of their similar political leanings.", category:"🏝", is_private: false)
newyorkitinerary = Itinerary.create(name: "new york city", description: "New York, often called New York City to distinguish it from New York State, or NYC for short, is the most populous city in the United States.", category:"🍎", is_private: false)
mexicoitinerary = Itinerary.create(name: "mexico", description: "Mexico is a land of extremes, with high mountains and deep canyons in the center of the country, sweeping deserts in the north, and dense rain forests in the south and east. Mountains cover much of Mexico.", category:"🇲🇽", is_private: false)
hawaiiitinerary = Itinerary.create(name: "hawaii", description: "Hawaii is the world's largest island chain, and it's the only U.S. state completely made up of islands.", category:"🌊", is_private: false)

puts "Seeding user_itineraries..."
UserItinerary.create(is_owner: true, is_favorite: false, user_id: demoUser.id, itinerary_id: westcoastitinerary.id)
UserItinerary.create(is_owner: true, is_favorite: false, user_id: demoUser.id, itinerary_id: newyorkitinerary.id)
UserItinerary.create(is_owner: true, is_favorite: false, user_id: demoUser.id, itinerary_id: mexicoitinerary.id)
UserItinerary.create(is_owner: true, is_favorite: false, user_id: demoUser.id, itinerary_id: hawaiiitinerary.id)

# puts "Seeding itinerary_items..."
# West Coast
a = ItineraryItem.create(name: "The Last Bookstore", content: "The Last Bookstore is California's largest used and new book and record store.", time: "2022-01-01T08:00", location: "34.0476682 -118.2497228", itinerary_id: westcoastitinerary.id)
c = ItineraryItem.create(name: "Zion National Park", content: "Located in Washington, Iron, and Kane Counties in southwestern Utah, Zion National Park encompasses some of the most scenic canyon country in the United States.", time: "2022-01-01T10:00", location: "37.348099 -113.089996", itinerary_id: westcoastitinerary.id)
d = ItineraryItem.create(name: "Alcatraz", content: "Alcatraz Island, byname The Rock, rocky island in San Francisco Bay, California, U.S.", time: "2022-01-01T13:00", location: "37.828125 -122.422844", itinerary_id: westcoastitinerary.id)
e = ItineraryItem.create(name: "El Capitan", content: "Located on the north side of Yosemite Valley, near its western end, El Capitan is one of the most iconic rock formations in the world.", time: "2022-01-01T15:00", location: "37.733952 -119.637756", itinerary_id: westcoastitinerary.id)
# New York
b = ItineraryItem.create(name: "Statue of Liberty", content: "The Statue of Liberty is a 305-foot (93-metre) statue located on Liberty Island in Upper New York Bay, off the coast of New York City.", time: "2022-02-12T07:00", location: "40.689247, -74.044502", itinerary_id: newyorkitinerary.id)
f = ItineraryItem.create(name: "Empire State Building", content: "The world's most magnificent Art Deco skyscraper, it's a living piece of New York history and an instantly recognizable symbol of city culture today.", time: "2022-02-12T09:00", location: "40.748817 -73.985428", itinerary_id: newyorkitinerary.id)
g = ItineraryItem.create(name: "One World Trade Center", content: "At a symbolic 1,776 feet tall, One World Trade is the tallest building in the United States and Western Hemisphere, overtaking Sears Tower in Chicago. ", time: "2022-02-12T13:00", location: "40.712742 -74.013382", itinerary_id: newyorkitinerary.id)
h = ItineraryItem.create(name: "Museum of Modern Art", content: "The Museum of Modern Art (MoMA) is an art museum located in Midtown Manhattan, New York City, on 53rd Street between Fifth and Sixth Avenues.", time: "2022-02-12T17:00", location: "40.761509 -73.978271", itinerary_id: newyorkitinerary.id)
# Mexico
i = ItineraryItem.create(name: "Teotihuacán", content: "Teotihuacan is an ancient Mesoamerican city located 30 miles (50 km) northeast of modern-day Mexico City.", time: "2021-10-02T08:00", location: "19.689722 -98.860833", itinerary_id: mexicoitinerary.id)
j = ItineraryItem.create(name: "Xochimilco", content: "The name Xochimilco is a combination of the Nahuatl words xochitl and milli and means “where the flowers grow.”", time: "2021-10-02T08:00", location: "19.25465 -99.10356", itinerary_id: mexicoitinerary.id)
k = ItineraryItem.create(name: "Grutas de Loltún", content: "One of the largest dry-cave systems on the Yucatán Peninsula, Loltún ('stone flower' in Maya) provided a treasure trove of data for archaeologists studying the Maya.", time: "2021-10-02T08:00", location: "20.253422 -89.455528", itinerary_id: mexicoitinerary.id)
l = ItineraryItem.create(name: "Iglesia de San Pedro Vaquerias", content: "In the middle of the historic old town, surrounded by other colonial churches, lies the church of San Pedro.", time: "2021-10-02T08:00", location: "20.378859 -98.571442", itinerary_id: mexicoitinerary.id)
# Hawaii
m = ItineraryItem.create(name: "Hawaii Volcanoes National Park", content: "Established in 1961 and formerly a part of Hawaii National Park (established 1916), it occupies an area of 505 square miles (1,308 square km) and includes two active volcanoes", time: "2022-09-21T12:00", location: "19.479488 -155.602829", itinerary_id: hawaiiitinerary.id)
n = ItineraryItem.create(name: "Pearl Harbour", content: "Pearl Harbor is a U.S. naval base near Honolulu, Hawaii, that was the scene of a devastating surprise attack by Japanese forces on December 7, 1941.", time: "2022-09-21T07:00", location: "21.339884 -157.970901", itinerary_id: hawaiiitinerary.id)
o = ItineraryItem.create(name: "Hanalei Bay", content: "Hanalei Bay lies on the north shore of Kauai beneath 4000 foot towering, green and ancient volcanic mountains and spectacular shimmering waterfalls.", time: "2022-09-21T20:00", location: "22.21 -159.5091667", itinerary_id: hawaiiitinerary.id)
pp = ItineraryItem.create(name: "North Shore", content: "The North Shore of Oahu encompasses the 17-mile north-facing coastal area between Ka'ena Point in the west and eastward to Kahuku Point.", time: "2022-09-21T12:00", location: "21.5616589 -158.071598", itinerary_id: hawaiiitinerary.id)

puts "Seeding itinerary_item_categories..."
ItineraryItemCategory.create(itinerary_item_id: a.id, category_id: sights.id)
ItineraryItemCategory.create(itinerary_item_id: a.id, category_id: landmarks.id)

ItineraryItemCategory.create(itinerary_item_id: b.id, category_id: landmarks.id)
ItineraryItemCategory.create(itinerary_item_id: b.id, category_id: sights.id)

ItineraryItemCategory.create(itinerary_item_id: c.id, category_id: landmarks.id)
ItineraryItemCategory.create(itinerary_item_id: c.id, category_id: sights.id)
ItineraryItemCategory.create(itinerary_item_id: c.id, category_id: parks.id)

ItineraryItemCategory.create(itinerary_item_id: d.id, category_id: landmarks.id)

ItineraryItemCategory.create(itinerary_item_id: e.id, category_id: landmarks.id)
ItineraryItemCategory.create(itinerary_item_id: e.id, category_id: museums.id)

ItineraryItemCategory.create(itinerary_item_id: f.id, category_id: landmarks.id)

ItineraryItemCategory.create(itinerary_item_id: g.id, category_id: museums.id)
ItineraryItemCategory.create(itinerary_item_id: g.id, category_id: sights.id)

ItineraryItemCategory.create(itinerary_item_id: h.id, category_id: museums.id)

ItineraryItemCategory.create(itinerary_item_id: i.id, category_id: landmarks.id)

ItineraryItemCategory.create(itinerary_item_id: j.id, category_id: sights.id)
ItineraryItemCategory.create(itinerary_item_id: j.id, category_id: landmarks.id)

ItineraryItemCategory.create(itinerary_item_id: k.id, category_id: Category.ids.sample)
ItineraryItemCategory.create(itinerary_item_id: l.id, category_id: Category.ids.sample)
ItineraryItemCategory.create(itinerary_item_id: m.id, category_id: Category.ids.sample)
ItineraryItemCategory.create(itinerary_item_id: n.id, category_id: Category.ids.sample)
ItineraryItemCategory.create(itinerary_item_id: o.id, category_id: Category.ids.sample)
ItineraryItemCategory.create(itinerary_item_id: pp.id, category_id: Category.ids.sample)

puts "🌹 Seeding complete!"