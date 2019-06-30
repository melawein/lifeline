class Mood < ApplicationRecord
  belongs_to :day

  FEELING = ["Great", "Good", "Okay", "Sad", "Angry", "Anxious"]
end
