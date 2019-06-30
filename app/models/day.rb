class Day < ApplicationRecord
  belongs_to :user
  has_many :exercises
  has_manyy :moods
  has_many :pains

  HOURS = [0-3, 3-6, 6-9, 9+]

  validates :sleep_hours, inclusion: { in: HOURS }, presence: true

end
