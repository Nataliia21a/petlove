import { createSlice } from "@reduxjs/toolkit";
import { getFriends } from "./operations";

const slice = createSlice({
  name: "friends",
  initialState: {
    items: [],
    loading: false,
    error: false,
  },
  extraReducers: (builder) =>
    builder
      .addCase(getFriends.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(getFriends.fulfilled, (state, action) => {
        state.loading = false;
        state.error = false;
        state.items = action.payload;
      })
      .addCase(getFriends.rejected, (state) => {
        state.loading = false;
        state.error = true;
      }),
});

export default slice.reducer;
