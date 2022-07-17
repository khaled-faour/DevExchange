import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const verify = createAsyncThunk(
  "auth/verify",
  async (params, { getState }) => {
    const options = {
      method: 'get',
      url: '/auth',
    };
    const result = await axios.request(options)
    return result.data;
  }
);

export const logout = createAsyncThunk(
  "auth/logout",
  async (params, { getState }) => {
    const options = {
      method: 'get',
      url: '/auth/logout',
    };
    const result = await axios.request(options)
    return result.data;
  }
);