class Day < ApplicationRecord
  belongs_to :user
  has_one :exercise
  has_many :moods
  has_many :pains
  has_one :sleep

  HOURS = (0..12).to_a


  def all_events_today(user)
    event_day = []

    event_day << self.exercise
    event_day << self.sleep
    self.moods.each do |mo|
      if mo.day.user == user
        event_day << mo
      end
    end
    self.pains.each do |pain|
      if pain.day.user == user
        event_day << pain
      end
    end
    event_day
  end
end
