import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
 

const initialState = {
  trainDetailsData: [],
  isLoading: true,
  isError: false,
  error: "",
};

export const fetchTrainData = createAsyncThunk(
  "train/fetchTrainData",
  async (data) => {
    const response = await axios.post("http://localhost:5000/api/v1/train/gets/packages", data);
    return response.data;
  }
);

const trainSlice = createSlice({
  name: "train",
  reducers: {},
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchTrainData.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchTrainData.fulfilled, (state, action) => {
      state.trainDetailsData = action.payload;
      state.isLoading = false;
    });

    builder.addCase(fetchTrainData.rejected, (state, action) => {
      state.isError = true;
      state.error = action.error.message;
      state.isLoading = false;
    });
  },
});

 

export default trainSlice.reducer;
 