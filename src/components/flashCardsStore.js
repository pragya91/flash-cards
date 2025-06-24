import { createSlice } from "@reduxjs/toolkit"; 
import questionBank from "../assets/question-bank.json";

export const questionsStoreSlice = createSlice({
  name: 'questions',
  initialState: {
    previousQuestionId: undefined,
    currentQuestion: questionBank[0],
    currentCategory: undefined,
  },
  reducers: {
    nextQuestion: (state, _action) => {
        // Question bank has 100 questions, so we can generate a random question ID between 1 and 100
        const randomId = Math.floor(Math.random() * 100) + 1;

        // Redux Toolkit allows us to write "mutating" logic in reducers. It
        // doesn't actually mutate the state because it uses the Immer library,
        // which detects changes to a "draft state" and produces a brand new
        // immutable state based off those changes
        state.previousQuestionId = state.currentQuestionId;
        state.currentQuestion = questionBank[randomId];
    },
    previousQuestion: (state, _action) => {
      state.currentQuestion = questionBank[state.previousQuestionId];
      state.previousQuestionId = undefined;
    },
    reset: (state, _action) => {
      state = state.initialState
    }
  }
});

export const { nextQuestion, previousQuestion, reset } = questionsStoreSlice.actions;

export default questionsStoreSlice.reducer;
