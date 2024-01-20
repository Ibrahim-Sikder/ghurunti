import { createSlice } from '@reduxjs/toolkit';

const trainConfirmationSlice = createSlice({
  name: 'trainConfirmation',
  initialState: {
    seats: null,
    fare: null,
    class: null,
    total: null,
    boardingPoint: null,
  },
  reducers: {
    saveTrainConfirmationData: (state, action) => {
      return {
        ...state,
        ...action.payload,
      };
    },
  },
});

export const { saveTrainConfirmationData } = trainConfirmationSlice.actions;
export default trainConfirmationSlice.reducer;
