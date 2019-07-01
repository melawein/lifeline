class RemoveSleepHoursFromDays < ActiveRecord::Migration[5.2]
  def change
    remove_column :days, :sleep_hours
  end
end
