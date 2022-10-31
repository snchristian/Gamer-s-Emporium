import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    singleGame: {},
    requesting:true
  }
  
  const gameSlice = createSlice({
    name: "game",
    initialState,
    reducers: {
        setSingleGame(state,action){
            state.singleGame = action.payload
            state.requesting = false
        }
    }
  })

  export const {setSingleGame} = gameSlice.actions
  export default gameSlice.reducer
