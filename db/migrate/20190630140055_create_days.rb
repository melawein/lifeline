class CreateDays < ActiveRecord::Migration[5.2]
  def change
    create_table :days do |t|
      t.integer :sleep_hours
      t.date :date
      t.references :user, foreign_key: true

      t.timestamps
    end
  end
end
