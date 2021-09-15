puts "Starting seed..."

puts "Seeding categories..."
Category.create(name: 'Restaurants')
Category.create(name: 'Sights')
Category.create(name: 'Landmarks')
Category.create(name: 'Parks')
Category.create(name: 'Museums')

puts "Seeding complete!"