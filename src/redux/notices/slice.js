import { createSlice } from "@reduxjs/toolkit";
import { getNotices } from "./operations";

const slice = createSlice({
  name: "notices",
  initialState: {
    loading: false,
    error: false,
  },
  extraReducers: (builder) =>
    builder.addCase(getNotices.pending, (state) => {
      state.loading = true;
      state.error = false;
    }),
});

export default slice.reducer;
