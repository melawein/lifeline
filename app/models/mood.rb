class Mood < ApplicationRecord
  belongs_to :day

  FEELING = ["Angry", "Anxious", "Good", "Great", "Okay", "Sad"]

  validates :feeling, inclusion: { in: FEELING }, presence: true


  def start_time
        self.day.date
    end
end
