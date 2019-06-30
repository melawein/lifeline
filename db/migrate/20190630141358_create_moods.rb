class CreateMoods < ActiveRecord::Migration[5.2]
  def change
    create_table :moods do |t|
      t.string :feeling
      t.references :day, foreign_key: true

      t.timestamps
    end
  end
end
