import { createSlice } from '@reduxjs/toolkit'

const initialState ={
    content: '',
    gameReviews:[]
}

const reviewSlice = createSlice({
    name:"review",
    initialState,
    reducers:{
        setContent(state, action){
            state.content = action.payload
        },

        clearContent(state){
            state.content =''

        },
        setGameReview(state,action){
            state.gameReviews = action.payload
        },

    }
})

export const {setContent,addGameReview,clearContent,setGameReview} = reviewSlice.actions
export default reviewSlice.reducer