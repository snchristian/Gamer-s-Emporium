import {configureStore} from "@reduxjs/toolkit"
import SessionReducer from "../features/session/SessionsSlice"
import {gamesApi} from '../App/services/gamesApi'

export const store = configureStore({
    reducer:{
        session: SessionReducer,
        [gamesApi.reducerPath]: gamesApi.reducer
        
    },

    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware().concat(gamesApi.middleware)
    }
})