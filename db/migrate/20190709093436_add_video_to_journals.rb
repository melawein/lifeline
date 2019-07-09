class AddVideoToJournals < ActiveRecord::Migration[5.2]
  def change
    add_column :journals, :video, :string
  end
end
