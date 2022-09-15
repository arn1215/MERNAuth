import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";



export const getTickets = createAsyncThunk(
  "events/getTickets",
  async (userId) => {
    const data = await fetch(`/api/tickets/${userId}`)
    const res = await data.json()
    return res
  }
)

createAsyncThunk()




export const ticketsSlice = createSlice({
  name: "events",
  initialState: {
    tickets: [],
    status: null
  },
  extraReducers: (builder) => {

    builder.addCase(getTickets.pending, (state, action) => {
      state.status ='loading'
    })

    builder.addCase(getTickets.fulfilled, (state, action) => {
      state.status ='success'
      state.tickets = action.payload
    })

    builder.addCase(getTickets.rejected, (state, action) => {
      state.status = 'failed'
    })



  }
})


export default ticketsSlice.reducer
