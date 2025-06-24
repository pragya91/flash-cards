import { configureStore } from '@reduxjs/toolkit'
import cardReducer from './components/flashCardsStore'

export default configureStore({
  reducer: {
    questions: cardReducer
  }
})