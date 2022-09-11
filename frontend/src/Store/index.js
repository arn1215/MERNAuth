import { configureStore } from '@reduxjs/toolkit'
import  bidsSlice  from './bids'
import sessionSlice from './session'
export const store = configureStore({
  reducer: {
    bids: bidsSlice,
    session: sessionSlice,
  },
})