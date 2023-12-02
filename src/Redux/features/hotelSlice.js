import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  hotelDetailsData: [],
  isLoading: true,
  isError: false,
  error: "",
};

export const fetchHotelData = createAsyncThunk(
  "hotel/fetchHotelData",
  async (data) => {
    // console.log(data.event);
    const response = await axios.post(
      "http://localhost:5000/api/v1/hotel/get/packages",
      data
    );

    // // if (data.event === "Highest Price") {
    // //   const response = await axios.post(
    // //     "http://localhost:5000/api/v1/hotel/get/packages/sort",
    // //     data.hotelDetailsData
    // //   );
    // //   console.log(response);
    //   return response.data;
    // }

    return response.data;
  }
);

const hotelSlice = createSlice({
  name: "hotel",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchHotelData.pending, (state, action) => {
      state.isLoading = true;
      state.hotelDetailsData = [];
    });
    builder.addCase(fetchHotelData.fulfilled, (state, action) => {
      state.hotelDetailsData = action.payload;
      state.isLoading = false;
    });

    builder.addCase(fetchHotelData.rejected, (state, action) => {
      state.isError = true;
      state.error = action.error.message;
      state.isLoading = false;
      state.hotelDetailsData = [];
    });
  },
});

export const { setHotelData } = hotelSlice.actions;
export default hotelSlice.reducer;
