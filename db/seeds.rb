# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

puts 'Cleaning database...'
Mood.destroy_all
Pain.destroy_all
Sleep.destroy_all
Exercise.destroy_all
Day.destroy_all
User.destroy_all

puts 'Creating users...'
users_attributes = [
  {
    first_name:   'Gabby',
    last_name:  'Simon',
    email:  'gab@petpal.com',
    password:        '123456',
    phone_number: '123456789'
  }
]
gab = User.create!(users_attributes[0])

puts 'Finished!'

today = Date.today

puts 'Creating 30 fake days...'
30.times do |i|
  i += 1
  day = Day.create(
    user: gab,
    date: today - i
    )
    2.times do
      mood = Mood.create(
        feeling: ["Great", "Good", "Okay", "Sad", "Angry", "Anxious"].sample,
        day: day
        )
    end
    1.times do
      sleep = Sleep.create(
        hours: ['6', '7', '8', '9', '10', '11', '12'].sample,
        day: day
        )
    end
    2.times do
      pain = Pain.create(
        symptom: ["Head", "Stomach", "Back", "Chest"].sample,
        day: day
        )
    end
    1.times do
      exercise = Exercise.create(
        time: ['0', '10', '20', '30', '40', '50', '60'].sample,
        day: day
        )
    end


end
puts 'Finished!'




















