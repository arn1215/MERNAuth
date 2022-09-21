import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


export const getEvents = createAsyncThunk(
  "events/getEvents",
  async (dispatch, getState) => {
    const data = await fetch('/api/events')
    const res = await data.json()
    return res
  }
)

createAsyncThunk()




export const eventsSlice = createSlice({
  name: "events",
  initialState: {
    events: [],
    status: null
  },
  extraReducers: (builder) => {

    builder.addCase(getEvents.pending, (state, action) => {
      state.status = 'loading'
    })

    builder.addCase(getEvents.fulfilled, (state, action) => {
      state.status = 'success'
      state.events = action.payload
    })

    builder.addCase(getEvents.rejected, (state, action) => {
      state.status = 'failed'
    })



  }
})


export default eventsSlice.reducer
