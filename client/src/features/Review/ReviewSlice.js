import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  content: '',
  gameReviews: [],
  activeReview: null
}

const reviewSlice = createSlice({
  name: "review",
  initialState,
  reducers: {
    setContent(state, action) {
      state.content = action.payload
    },

    clearContent(state) {
      state.content = ''

    },
    setGameReview(state, action) {
      state.gameReviews = action.payload
    },

    setActiveComment(state, action) {
      state.activeReview = action.payload
    }

  }
})

export const { setContent, clearContent, setGameReview, setActiveComment } = reviewSlice.actions
export default reviewSlice.reducer