class CreateJournals < ActiveRecord::Migration[5.2]
  def change
    create_table :journals do |t|
      t.string :title
      t.text :text
      t.string :voice
      t.references :user, foreign_key: true

      t.timestamps
    end
  end
end
