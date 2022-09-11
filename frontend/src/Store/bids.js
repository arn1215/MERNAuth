import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


export const getBids = createAsyncThunk(
  "bids/getBids",
  async (dispatch, getState) => {
      const data = await fetch('https://ShimmeringNiceOptimization.arn1215.repl.co/api/bids')
      const res = await data.json()
      return res
    
  }
)


export const bidsSlice = createSlice({
  name: "bids",
  initialState: {
    bids: [],
    status: null
  },
  extraReducers: {
    [getBids.pending] : (state, action) => {
      state.status = 'loading'
    },
    [getBids.fulfilled]: (state, action) => {
      state.status = 'success'
      state.bids = action.payload
    },
    [getBids.rejected]: (state, action) => {
      state.status = 'failed'
    }
  }
})


export default bidsSlice.reducer
