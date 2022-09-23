import { configureStore } from '@reduxjs/toolkit'
import cartSlice from './cart'
import eventSlice from './event'
import eventsSlice from './events'
import orderSlice from './order'
import orderPaySlice from './orderPay'
import sessionSlice from './session'
import ticketsSlice from "./tickets"
export const store = configureStore({
  reducer: {
    session: sessionSlice,
    event: eventSlice,
    events: eventsSlice,
    tickets: ticketsSlice,
    cart: cartSlice,
    order: orderSlice,
    orderPay: orderPaySlice
  },
})