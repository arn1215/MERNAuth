import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


export const getSearchItems = createAsyncThunk(
  "search/getSearchItems",
  async (query) => {
    const data = await fetch(`/api/search/${query}`)
    const res = await data.json()
    return res
  }
)

export const clearSearchItems = createAsyncThunk(
  "search/clearSearch",
  async () => {
    return "clear"
  }
)

createAsyncThunk()




export const searchSlice = createSlice({
  name: "search",
  initialState: {
    searchItems: [],
    status: null
  },
  extraReducers: (builder) => {

    builder.addCase(getSearchItems.pending, (state, action) => {
      state.status = 'loading'
    })

    builder.addCase(getSearchItems.fulfilled, (state, action) => {
      state.status = 'success'
      state.searchItems = action.payload
    })

    builder.addCase(getSearchItems.rejected, (state, action) => {
      state.status = 'failed'
    })

    builder.addCase(clearSearchItems.pending, (state, action) => {
      state.status = 'loading'
    })

    builder.addCase(clearSearchItems.fulfilled, (state, action) => {
      state.status = 'success'
      state.searchItems = []
    })

    builder.addCase(clearSearchItems.rejected, (state, action) => {
      state.status = 'failed'
    })

  }
})


export default searchSlice.reducer
