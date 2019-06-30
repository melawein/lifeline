class Day < ApplicationRecord
  belongs_to :user
  has_many :exercises
  has_manyy :moods
  has_many :pains

  HOURS = (0..12).to_a

  validates :sleep_hours, inclusion: { in: HOURS }, presence: true

end
