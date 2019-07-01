class Exercise < ApplicationRecord
  belongs_to :day

  TIME = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120]

  validates :time, inclusion: { in: TIME }, presence: true

end
