import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  busDetailsData: [],
  filterData: {},
  isLoading: true,
  isError: false,
  error: "",
};

export const fetchBusData = createAsyncThunk(
  "bus/fetchBusData",
  async (data) => {
    const response = await axios.post(
      "http://localhost:5000/api/v1/bus/gets/packages",
      data
    );
    return response.data;
  }
);

const busSlice = createSlice({
  name: "bus",
  reducers: {
    setBusFilterTypes: (state, action) => {
      // Modify the state based on the action payload
      state.filterData = action.payload;
    },
  },
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchBusData.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchBusData.fulfilled, (state, action) => {
      state.busDetailsData = action.payload;
      state.isLoading = false;
    });

    builder.addCase(fetchBusData.rejected, (state, action) => {
      state.isError = true;
      state.error = action.error.message;
      state.isLoading = false;
    });
  },
});

export const { setBusFilterTypes } = busSlice.actions;
export default busSlice.reducer;
