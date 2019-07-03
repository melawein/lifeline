class Day < ApplicationRecord
  belongs_to :user
  has_many :exercises
  has_many :moods
  has_many :pains
  has_many :sleeps

  HOURS = (0..12).to_a

  def all_events_today
    event_day = []
    self.exercises.each{ |ex| event_day << ex }
    self.moods.each{ |mo| event_day << mo }
    self.pains.each{ |pain| event_day << pain }
    self.sleeps.each{ |sl| event_day << sl }
    event_day
  end
end
