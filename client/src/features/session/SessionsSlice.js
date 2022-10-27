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
       
        setCurrentuser(state,action){
            state.currentUser = action.payload
            state.loggedIn = true
        },

        loggedOut(state){
            state.currentUser = {}
            state.loggedIn = false

        }
    }
})
export const {loggedIn,loggedOut,setCurrentuser} = sessionSlice.actions
export default sessionSlice.reducer