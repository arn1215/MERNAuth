import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";




createAsyncThunk()

export const addItem = createAsyncThunk(
  "cart/addItem",
  async (itemData) => {
    const { id, qty } = itemData
    const data = await fetch(`/api/events/${id}`)
    const res = await data.json()
    return {
      _id: res._id,
      name: res.name,
      images: res.images,
      ticketPrice: res.ticketPrice,
      ticketsInStock: res.ticketsInStock,
      qty: Number(qty)
    }
  }
)

export const deleteItem = createAsyncThunk(
  "cart/deleteItem",
  async (itemData) => {
    return itemData
  }
)

const cartItemsFromStorage = JSON.parse(
  localStorage.getItem('cartItems')
)

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: cartItemsFromStorage || {},
    status: null
  },
  extraReducers: (builder) => {


    //ADD AN ITEM====================================================================
    builder.addCase(addItem.pending, (state, action) => {
      state.status = 'loading'
    })

    builder.addCase(addItem.fulfilled, (state, action) => {
      const item = action.payload
      state.cartItems[item._id] = item
      state.status = 'success'
    })

    builder.addCase(addItem.rejected, (state, action) => {
      state.status = 'failed'
    })

    //DELETE AN ITEM =======================================================================

    builder.addCase(deleteItem.pending, (state, action) => {
      state.status = 'loading'
    })

    builder.addCase(deleteItem.fulfilled, (state, action) => {

      const item = action.payload
      delete state.cartItems[item._id]
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems))

    })

    builder.addCase(deleteItem.rejected, (state, action) => {
      state.status = 'failed'
    })


  }
})


export default cartSlice.reducer
