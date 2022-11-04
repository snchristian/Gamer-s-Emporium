class GameSerializer < ActiveModel::Serializer
  attributes :id, :title, :released_date, :platforms, :genres,:image, :inUserGameLibrary

  def inUserGameLibrary
    if current_user === nil
      return nil
    else
      current_user.user_games.find_by(game_id: object.id)
    end
  end

end
