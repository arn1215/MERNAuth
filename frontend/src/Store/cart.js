import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";




createAsyncThunk()

export const addItem = createAsyncThunk(
  "cart/addItem",
  async (cartData) => {
    const {id, qty} = cartData
    const data = await fetch(`/api/events/${id}`)
    const res = await data.json()
    return {
      event: res._id,
      name: res.name,
      images: res.images,
      ticketPrice: res.ticketPrice,
      ticketsInStock: res.ticketsInStock,
      qty: Number(qty)
    }
  }
  
)
const cartItemsFromStorage = localStorage.getItem('cartItems') ? JSON.parse(
  localStorage.getItem('cartItems')
) : []

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: cartItemsFromStorage,
    status: null
  },
  extraReducers: (builder) => {
    
    builder.addCase(addItem.pending, (state, action) => {
      state.status ='loading'
    })

    builder.addCase(addItem.fulfilled, (state, action) => {
      const item = action.payload
      const itemExists = state.cartItems.find(x => x.event === item.event)
      if (itemExists) {
        return {
          ...state,
          cartItems: state.cartItems.map(x => x.event === itemExists.event ? item : x)
        }
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, item]
        }
        
      }
    })

    builder.addCase(addItem.rejected, (state, action) => {
      state.status = 'failed'
    })


  }
})


export default cartSlice.reducer
