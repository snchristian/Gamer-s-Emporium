import { configureStore } from "@reduxjs/toolkit"
import sessionReducer from "../features/session/SessionsSlice"
import { gamesApi } from '../App/services/gamesApi'
import questionReducer from '../features/Question/QuestionSlice'
import gameReducer from "../features/games/GameSlice"

export const store = configureStore({
  reducer: {
    session: sessionReducer,
    question: questionReducer,
    game:gameReducer,
    [gamesApi.reducerPath]: gamesApi.reducer,
    
  

  },

  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(gamesApi.middleware)
  }
})