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
