class Exercise < ApplicationRecord
  belongs_to :day

  TIME = [0-19, 20-39, 40-59, 60-79, 80-99, 100+]

  validates :time, inclusion: { in: TIME }, presence: true

end
