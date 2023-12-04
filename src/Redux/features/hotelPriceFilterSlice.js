// import { createSlice} from "@reduxjs/toolkit";

// const initialState = {
//   hotelDetailsData:{},
//   isLoading: true,
//   isError: false,
//   error: "",
// };

 

// const hotelSlice = createSlice({
//   name: "hotel",
//   initialState,
//   reducers: {},
//   extraReducers: (builder) => {
//     builder.addCase(fetchHotelData.pending, (state, action) => {
//       state.isLoading = true;
//       state.hotelDetailsData = [];
//     });
//     builder.addCase(fetchHotelData.fulfilled, (state, action) => {
//       state.hotelDetailsData = action.payload;
//       state.isLoading = false;
//     });

//     builder.addCase(fetchHotelData.rejected, (state, action) => {
//       state.isError = true;
//       state.error = action.error.message;
//       state.isLoading = false;
//       state.hotelDetailsData = [];
//     });
//   },
// });

// export const { setHotelData } = hotelSlice.actions;
// export default hotelSlice.reducer;
