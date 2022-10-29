import { createSlice } from '@reduxjs/toolkit'


const initialState = {
  userPlatform: [],
  userInterest: [],
  currentQuestionId: 1

}

const questionSlice = createSlice({
  name: "question",
  initialState,
  reducers: {

    selectUserPlatform(state, action) {
      state.userPlatform = [...state.userPlatform, action.payload]

    },
    selectUserIntrest(state, action) {
      state.userInterest = [...state.userInterest, action.payload]

    },

    setCurrentQuestion(state) {
      state.currentQuestionId = state.currentQuestionId + 1

    },
    unselectInterest(state, action) {
      state.userInterest = state.userInterest.filter((e) => e !== action.payload)

    },
    unselectPlatform(state, action) {
      state.userPlatform = state.userPlatform.filter((e) => e !== action.payload)

    }
  }
})
export const { selectUserPlatform, setCurrentQuestion, selectUserIntrest, unselectInterest, unselectPlatform } = questionSlice.actions
export default questionSlice.reducer