class CreateGames < ActiveRecord::Migration[7.0]
  def change
    create_table :games do |t|
      t.string :title
      t.string :released_date
      t.string :platforms,array: true
      t.string :genres, array: true
      t.string :image
      t.timestamps
    end
  end
end
