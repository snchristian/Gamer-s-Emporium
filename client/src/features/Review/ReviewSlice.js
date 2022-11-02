import { createSlice } from '@reduxjs/toolkit'

const initialState ={
    content: []
}

const reviewSlice = createSlice({
    name:"review",
    initialState,
    reducers:{
        setContent(state, action){
            state.content = action.payload
        }
    }
})

export const {setContent} = reviewSlice.actions
export default reviewSlice.reducer