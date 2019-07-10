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
Journal.destroy_all
User.destroy_all

puts 'Creating users...'
users_attributes = [
  {
    first_name:   'Melissa',
    last_name:  'Simon',
    email:  'mel@lifeline.com',
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
puts 'Creating 10 fake entries...'
# 5.times do |i|
#   i += 1
#   day = Day.create(
#     user: gab,
#     date: today - i
#     )
# end
  journal = Journal.create(
    title: 'First day',
    text: 'Today is the first day i am using lifeline..I am a bit worried but excited to try something new.',
    # created_at: day
    )
  journal = Journal.create(
    title: 'What a weird day',
    text: 'Today was a really hard day at work and I just felt really weird by the time I got home. I was not really sure how to feel when I got home',
    # created_at: day
    )
  journal = Journal.create(
    title: 'THIS WAS THE CRAZIEST DAY',
    text: 'THESE BUS DRIVERS ARE TRULY UNBELIEVABLE!!!! I watched this crazy bus driver hit a scooter on the way to work today, how is this possible and I can only imagine how often this can happen!!!',
    # created_at: day
    )
  journal = Journal.create(
    title: 'Feeling greay',
    text: 'Today was awesome, I feel like I really accomplished something today, my boss seemed really happy with me and I could not be happier how this day went',
    # created_at: day
    )
  journal = Journal.create(
    title: 'Anxiety all over again',
    text: 'Sometimes I really feel like things are great but then they all seem to change. I am struggling but I know that I can get better!',
    # created_at: day
    )


puts 'Finished!'




















