import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


export const getEvents = createAsyncThunk(
  "events/getEvents",
  async (dispatch, getState) => {
      const data = await fetch('/api/events')
      const res = await data.json()
      return res
    
  }
)


export const eventsSlice = createSlice({
  name: "events",
  initialState: {
    events: [],
    status: null
  },
  extraReducers: {
    [getEvents.pending] : (state, action) => {
      state.status = 'loading'
    },
    [getEvents.fulfilled]: (state, action) => {
      state.status = 'success'
      state.events = action.payload
    },
    [getEvents.rejected]: (state, action) => {
      state.status = 'failed'
    }
  }
})


export default eventsSlice.reducer
