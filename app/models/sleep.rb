class Sleep < ApplicationRecord
  belongs_to :day


  HOURS = (0..12).to_a

  validates :hours, inclusion: { in: HOURS }, presence: true

end
