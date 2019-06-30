class CreatePains < ActiveRecord::Migration[5.2]
  def change
    create_table :pains do |t|
      t.string :symptom
      t.references :day, foreign_key: true

      t.timestamps
    end
  end
end
