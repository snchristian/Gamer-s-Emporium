class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :email, :likes, :platforms
end
