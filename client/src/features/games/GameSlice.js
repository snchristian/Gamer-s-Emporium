import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  singleGame: {},
  requesting: true,
  gameLibrary: []
}

const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    setSingleGame(state, action) {
      state.singleGame = action.payload
      state.requesting = false
    },

    setGameLibrary(state, action) {
      state.gameLibrary = action.payload

    }
  }
})

export const { setSingleGame, setGameLibrary } = gameSlice.actions
export default gameSlice.reducer