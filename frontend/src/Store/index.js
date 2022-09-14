import { configureStore } from '@reduxjs/toolkit'

import eventsSlice  from './events'
import sessionSlice from './session'
export const store = configureStore({
  reducer: {
    events: eventsSlice,
    session: sessionSlice,
  },
})