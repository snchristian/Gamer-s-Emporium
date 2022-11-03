class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :content, :rating, :username, :can_modify
  has_one :user
  has_one :game

  def username
    self.object.user.username
  end
  def can_modify
    current_user == self.object.user
  end
end
