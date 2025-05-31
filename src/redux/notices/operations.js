import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://petlove.b.goit.study/api";

export const getNotices = createAsyncThunk(
  "notices/getNotices",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(`/notices`);
      console.log(response.data);

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getCategories = createAsyncThunk(
  "notices/getCategories",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(`/notices/categories`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getNoticesSex = createAsyncThunk(
  "notices/getNoticesSex",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(`/notices/sex`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getPetSpecies = createAsyncThunk(
  "notices/getPetSpecies",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("/notices/species");
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getLocations = createAsyncThunk(
  "notices/getLocations",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("/cities/locations");
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getNoticeById = createAsyncThunk(
  "notices/getNoticesById",
  async (id, thunkAPI) => {
    try {
      const response = await axios.get(`/notices/${id}`);
      console.log("noticeById", response.data);

      return response.data;
    } catch (error) {
      thunkAPI.rejectWithValue(error.message);
    }
  }
);
