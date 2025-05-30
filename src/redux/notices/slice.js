import { createSlice } from "@reduxjs/toolkit";
import {
  getCategories,
  getLocations,
  getNotices,
  getNoticesSex,
  getPetSpecies,
} from "./operations";

const slice = createSlice({
  name: "notices",
  initialState: {
    items: [],
    categories: [],
    sex: [],
    species: [],
    locations: [],
    searchQuery: "",
    page: 1,
    perPage: 6,
    totalPages: 1,
    loading: false,
    error: false,
  },
  reducers: {
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(getNotices.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(getNotices.fulfilled, (state, action) => {
        state.items = action.payload.results;
        state.loading = false;
        state.error = false;
      })
      .addCase(getNotices.rejected, (state) => {
        state.loading = false;
        state.error = true;
      })
      .addCase(getCategories.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(getCategories.fulfilled, (state, action) => {
        state.categories = action.payload;
      })
      .addCase(getCategories.rejected, (state) => {
        state.loading = false;
        state.error = true;
      })
      .addCase(getNoticesSex.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(getNoticesSex.fulfilled, (state, action) => {
        state.sex = action.payload;
      })
      .addCase(getNoticesSex.rejected, (state) => {
        state.loading = false;
        state.error = true;
      })
      .addCase(getPetSpecies.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(getPetSpecies.fulfilled, (state, action) => {
        state.species = action.payload;
      })
      .addCase(getPetSpecies.rejected, (state) => {
        state.loading = false;
        state.error = true;
      })
      .addCase(getLocations.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(getLocations.fulfilled, (state, action) => {
        state.locations = action.payload;
      })
      .addCase(getLocations.rejected, (state) => {
        state.loading = false;
        state.error = true;
      }),
});

export const { setSearchQuery } = slice.actions;
export default slice.reducer;
