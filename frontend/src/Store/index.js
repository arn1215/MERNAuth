import { configureStore } from '@reduxjs/toolkit'
import  bidsReducer  from './bids'
export const store = configureStore({
  reducer: {
    bids: bidsReducer
  },
})