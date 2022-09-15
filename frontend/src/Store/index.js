import { configureStore } from '@reduxjs/toolkit'
import  eventSlice from './event'
import eventsSlice  from './events'
import sessionSlice from './session'
export const store = configureStore({
  reducer: {
    event: eventSlice,
    events: eventsSlice,
    session: sessionSlice,
  },
})