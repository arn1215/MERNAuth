const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

createAsyncThunk()

export const orderPay = createAsyncThunk("order/orderPay", async (order, paymentStatus) => {

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
  }
})


export default orderPaySlice.reducer