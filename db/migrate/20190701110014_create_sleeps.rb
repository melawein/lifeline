class CreateSleeps < ActiveRecord::Migration[5.2]
  def change
    create_table :sleeps do |t|
      t.integer :hours
      t.references :day, foreign_key: true

      t.timestamps
    end
  end
end
