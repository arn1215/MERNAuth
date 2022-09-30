import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

createAsyncThunk()


export const getPaidItems = createAsyncThunk(
  "fetch/paidItems",
  async (userId) => {

    const data = await fetch(`/api/orders/user/${userId}`)
    const res = await data.json()
    return res
  }
)

export const paidItemsSlice = createSlice({
  name: "paidItems",
  initialState: {
    paidItems: [],
    status: null
  },
  extraReducers: (builder) => {


    //ADD AN ITEM====================================================================
    builder.addCase(getPaidItems.pending, (state, action) => {
      state.status = 'loading'
    })

    builder.addCase(getPaidItems.fulfilled, (state, action) => {
      // action.payload.forEach(item => {
      //   state.paidItems.push(item)
      // })
      state.paidItems = action.payload
      state.status = 'success'
    })

    builder.addCase(getPaidItems.rejected, (state, action) => {
      state.status = 'failed'
    })


  }
})


export default paidItemsSlice.reducer
