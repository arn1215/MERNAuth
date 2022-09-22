import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

createAsyncThunk()

export const addOrder = createAsyncThunk(
  "order/addOrder",
  async (orderData) => {
    const { orderItems, paymentMethod, totalPrice, userId } = orderData
    const data = await fetch(`/api/orders`, {
      method: 'POST',
      body: JSON.stringify({ orderItems, paymentMethod, totalPrice, userId }),
      headers: { 'Content-Type': 'application/json' }
    })
    const res = await data.json()
    return res
  }
)

export const orderSlice = createSlice({
  name: "order",
  initialState: {
    status: null
  },
  extraReducers: (builder) => {


    //ADD AN ITEM====================================================================
    builder.addCase(addOrder.pending, (state, action) => {
      state.status = 'loading'
    })

    builder.addCase(addOrder.fulfilled, (state, action) => {
      state.order = action.payload
    })

    builder.addCase(addOrder.rejected, (state, action) => {
      state.status = 'failed'
    })

  }
})


export default orderSlice.reducer
