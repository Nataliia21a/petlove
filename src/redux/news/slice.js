import { createSlice } from "@reduxjs/toolkit";
import { fetchNews } from "./operations";

const slice = createSlice({
  name: "news",
  initialState: {
    items: [],
    activePage: 1,
    perPage: 6,
    totalPages: 1,
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
        state.page = action.payload.page;
        state.perPage = action.payload.perPage;
        state.totalPages = action.payload.totalPages;
        state.error = false;
      })
      .addCase(fetchNews.rejected, (state) => {
        state.loading = false;
        state.error = true;
      }),
});

export default slice.reducer;
