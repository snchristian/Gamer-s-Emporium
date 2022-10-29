class GameSerializer < ActiveModel::Serializer
  attributes :id, :title, :released, :platforms, :genres,:image
end
