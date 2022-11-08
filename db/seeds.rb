# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
require 'rest-client'

Game.destroy_all
User.destroy_all
Review.destroy_all

puts "🌱 Seeding Questions..."

Question.create(prompt:"Select three of your favorite genere of games", kind:"interest", answers:["Action","Adventure","RPG","Shooter","Indie","Puzzle", "Massibely Multiplayer","Racing"])
Question.create(prompt:"What platforms do you own", kind:"platform", answers:["Xbox 360"," Nintendo Swtich","PlayStation 4","PC","PlayStation 3","Xbox One","Xbox Series S/X",])

puts "🌱 Seeding Games..."

def api_key
    ENV["API_KEY"]
end

def games_dataset
    api_data = { key: api_key }
    games = RestClient.get("https://api.rawg.io/api/games?key=#{api_data[:key]}")
    games_array = JSON.parse(games)['results']
    games_array.each do |game|
      Game.create(
        title: game['name'],
        genres: game['genres'].map{|genre| genre["name"]},
        platforms: game["platforms"].map{|platform| platform['platform']["name"]},
        image: game['background_image'],
        released_date:game['released']
      )
    end
end

games_dataset()

puts "🌱 Seeding Users..."

User.create(username: "Laura",password:"best",email:"shadowBroker@yahoo.com",likes:["Puzzle","Shooter","RPG"], platforms:["Xbox","Nintendo Swtich","PC"])
User.create(username: "Leliana",password:"best204",email:"sisterNightingale@yahoo.com",likes:["Indie","Action","RPG"], platforms:["Xbox","PlayStation 4","PC"])
User.create(username: "Betty",password:"best265",email:"TranquilityLane@yahoo.com",likes:["Indie","Adventure","Shooter"], platforms:["PlayStation 3","PlayStation 4","PC"])

puts "🌱 Seeding Reviews..."

Review.create(rating:5,content:"Love this game can't get enough",game_id:1, user_id:1)
Review.create(rating:4,content:"Great Game",game_id:2, user_id:2)
Review.create(rating:4,content:"Love this game ",game_id:3, user_id:2)
Review.create(rating:4,content:"would recommend",game_id:1, user_id:3)



puts "✅ Done seeding!"