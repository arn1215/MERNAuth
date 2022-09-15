import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import jwt_decode from "jwt-decode";

const storageData = jwt_decode(JSON.stringify(localStorage.getItem("user")));

export const getToken = createAsyncThunk(
  "token/getToken",
  async (user, getState) => {
    return user
  }
)




export const sessionSlice = createSlice({
  name: "session",
  initialState: {
    user: storageData ? storageData : null,
    status: null
  },

  extraReducers: {
    [getToken.pending] : (state, action) => {
      state.status = 'loading'
    },
    [getToken.fulfilled]: (state, action) => {
      state.status = 'success'
      state.user = action.payload
    },
    [getToken.rejected]: (state, action) => {
      state.status = 'failed'
    },
    

  }
})


export default sessionSlice.reducer
