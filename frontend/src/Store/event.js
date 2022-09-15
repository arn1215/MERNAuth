import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";




createAsyncThunk()

export const getEvent = createAsyncThunk(
  "events/getEvent",
  async (id) => {
    const data = await fetch(`/api/events/${id}`)
    const res = await data.json()
    return res
  }
)


export const eventSlice = createSlice({
  name: "events",
  initialState: {
    event: {},
    status: null
  },
  extraReducers: (builder) => {
    
    builder.addCase(getEvent.pending, (state, action) => {
      state.status ='loading'
    })

    builder.addCase(getEvent.fulfilled, (state, action) => {
      state.status ='success'
      state.event = action.payload
    })

    builder.addCase(getEvent.rejected, (state, action) => {
      state.status = 'failed'
    })


  }
})


export default eventSlice.reducer
