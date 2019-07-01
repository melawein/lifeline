class Mood < ApplicationRecord
  belongs_to :day

  FEELING = ["Great", "Good", "Okay", "Sad", "Angry", "Anxious"]

  validates :feeling, inclusion: { in: FEELING }, presence: true


  def start_time
        self.day.date
    end
end
