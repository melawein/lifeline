class Pain < ApplicationRecord
  belongs_to :day

  SYMPTOMS = ["Back", "Chest", "Head", "Stomach"]

  validates :symptom, inclusion: { in: SYMPTOMS }, presence: true


   def start_time
        self.day.date
    end
end
