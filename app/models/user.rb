class User < ApplicationRecord
    has_secure_password 

    has_many :user_games,dependent: :destroy
    has_many :games, through: :user_games

    has_many :reviews,dependent: :destroy
    has_many :games, through: :user_games

    validates :username, presence: true, uniqueness: true
    validates :email, presence: :true, uniqueness: true
    
end
