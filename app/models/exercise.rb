class Exercise < ApplicationRecord
  belongs_to :day

  TIME = (0..120).to_a

  validates :time, inclusion: { in: TIME }, presence: true

end
