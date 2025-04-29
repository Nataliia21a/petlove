import { createSlice } from "@reduxjs/toolkit";
import { fetchNews } from "./operations";

const slice = createSlice({
  name: "pets",
  initialState: {
    items: [],
    loading: false,
    error: false,
  },
  extraReducers: (builder) =>
    builder
      .addCase(fetchNews.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(fetchNews.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
        state.error = false;
      })
      .addCase(fetchNews.rejected, (state) => {
        state.loading = false;
        state.error = true;
      }),
});

export default slice.reducer;
