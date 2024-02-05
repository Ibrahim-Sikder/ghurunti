import { createSlice } from '@reduxjs/toolkit';

const busConfirmationSlice = createSlice({
  name: 'busConfirmation',
  initialState: {
    seats: null,
    fare: null,
    class: null,
    total: null,
    boardingPoint: null,
  },
  reducers: {
    saveBusConfirmationData: (state, action) => {
      return {
        ...state,
        ...action.payload,
      };
    },
  },
});

export const { saveBusConfirmationData } = busConfirmationSlice.actions;
export default busConfirmationSlice.reducer;
