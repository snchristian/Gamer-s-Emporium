import { configureStore } from "@reduxjs/toolkit"
import sessionReducer from "../features/session/SessionsSlice"
import { gamesApi } from '../App/services/gamesApi'
import questionReducer from '../features/Question/QuestionSlice'

export const store = configureStore({
  reducer: {
    session: sessionReducer,
    question: questionReducer,
    [gamesApi.reducerPath]: gamesApi.reducer

  },

  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(gamesApi.middleware)
  }
})