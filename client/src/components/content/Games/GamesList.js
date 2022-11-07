import React from 'react'
import { useFetchGamesQuery } from '../../../App/services/gamesApi'
import CardSlider from './CardSlider'
import { useSelector } from 'react-redux'

function GamesList() {

  const { data = [], isFetching } = useFetchGamesQuery()

  const currentUser = useSelector(state => state.session.currentUser)

  function getGamesMatchingUserLikes() {
    if (!isFetching) {

      const filitedArray = data.filter((data2) => data2.genres.some(genre => {
        return currentUser.likes.some((like) => {
          return like === genre
        })

      }))

      const fil = filitedArray.filter(item => item.platforms.some(platform => {
        return currentUser.platforms.some(plat => {
          return plat === platform
        })
      }))
      return fil.slice(0, 6)
    }
  }

  function getGenreMatch(genre) {
    const genreMatches = data.filter(data => data.genres.includes(genre))
    return genreMatches.slice(0, 6)
  }

  if (isFetching) return <div>Loading...</div>

  return (
    <div>
      <CardSlider title="For You" data={getGamesMatchingUserLikes()} />
      <CardSlider title="Action" data={getGenreMatch("Action")} />
      <CardSlider title="RPG" data={getGenreMatch("RPG")} />
      <CardSlider title="Shooter" data={getGenreMatch("Shooter")} />

    </div>
  )
}

export default GamesList