import { createSlice } from '@reduxjs/toolkit'

const  initialState = {
    currentUser: {},
    loggedIn: false,
    value: 100

}

const sessionSlice = createSlice({
    name: "session",
    initialState,
    reducers:{
        loggedIn(state){
            state.loggedIn = !state.loggedIn
        },

        setCurrentuser(state,action){
            state.currentUser = action.payload
        }
    }
})
export const {loggedIn,setCurrentuser} = sessionSlice.actions
export default sessionSlice.reducer