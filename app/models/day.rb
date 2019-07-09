class Day < ApplicationRecord
  belongs_to :user
  has_one :exercise
  has_many :moods
  has_many :pains
  has_many :sleeps

  HOURS = (0..12).to_a


  def all_events_today(user)
    event_day = []
    self.exercises.each do |ex|
      if ex.day.user == user
        event_day << ex
      end
    end
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
    self.sleeps.each do |sl|
      if sl.day.user == user
        event_day << sl
      end
    end
    event_day
  end
end
