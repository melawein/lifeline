class Pain < ApplicationRecord
  belongs_to :day

  SYMPTOMS = ["Head", "Stomach", "Back", "Chest"]

  validates :symptom, inclusion: { in: SYMPTOMS }, presence: true


   def start_time
        self.day.date
    end
end
