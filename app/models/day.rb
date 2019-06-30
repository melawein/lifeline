class Day < ApplicationRecord
  belongs_to :user
  has_many :exercises, :moods, :pains
end
