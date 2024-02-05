import { createSlice} from "@reduxjs/toolkit";

const initialState = {
  email: "",
};

const signUpSlice = createSlice({
  name: "email",
  initialState,
  reducers: {
    setEmail: (state, action) => {
      state.email = action.payload;
    },
  },
});

export const { setEmail } = signUpSlice.actions;
export default signUpSlice.reducer;
