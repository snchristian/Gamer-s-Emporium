class UserGameSerializer < ActiveModel::Serializer
  attributes :id
  belongs_to :game

end
