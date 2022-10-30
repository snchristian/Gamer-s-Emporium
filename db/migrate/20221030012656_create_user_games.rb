class CreateUserGames < ActiveRecord::Migration[7.0]
  def change
    create_table :user_games do |t|
      t.boolean :compeleted
      t.boolean :currently_playing
      t.boolean :played
      t.belongs_to :user, null: false, foreign_key: true
      t.belongs_to :game, null: false, foreign_key: true
      t.timestamps
    end
  end
end
