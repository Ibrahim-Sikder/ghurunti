// visaSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  visaRequirementData: {},
  isLoading: true,
  isError: false,
  error: "",
};

export const fetchVisaRequirementData = createAsyncThunk(
  "visa/fetchVisaRequirementData",
  async (data) => {
    const response = await axios.post(
      "http://localhost:5000/api/v1/visa/requirement",
      data
    );
    return response.data.result;
  }
);

const visaRequirementSlice = createSlice({
  name: "visa",
  reducers: {},
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchVisaRequirementData.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchVisaRequirementData.fulfilled, (state, action) => {
      state.visaRequirementData = action.payload;
      state.isLoading = false;
    });

    builder.addCase(fetchVisaRequirementData.rejected, (state, action) => {
      state.isError = true;
      state.error = action.error.message;
      state.isLoading = false;
    });
  },
});

export default visaRequirementSlice.reducer;
