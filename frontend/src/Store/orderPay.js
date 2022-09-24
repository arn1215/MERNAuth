const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

createAsyncThunk()

export const orderPay = createAsyncThunk("order/orderPay", async (order, paymentStatus) => {

})

export const orderPayReset = createAsyncThunk("order/Reset", async (order, paymentStatus) => {

})


export const orderPaySlice = createSlice({
  name: 'orderPay',
  initialState: {
    orderPay: {},
    status: null
  },
  extraReducers: (builder) => {

    builder.addCase(orderPay.pending, (state, action) => {
      state.status = 'loading'
    })

    builder.addCase(orderPay.fulfilled, (state, action) => {
      state.status = 'success'
    })

    builder.addCase(orderPay.rejected, (state, action) => {
      state.status = 'failed'
    })

    builder.addCase(orderPayReset.pending, (state, action) => {
      state.status = 'loading'
    })

    builder.addCase(orderPayReset.fulfilled, (state, action) => {
      state.orderPay = {}
      state.status = 'success'
    })

    builder.addCase(orderPayReset.rejected, (state, action) => {
      state.status = 'failed'
    })

  }
})


export default orderPaySlice.reducer