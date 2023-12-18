import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
  },
  reducers: {
    login: (state, action) => {
      console.log(state.user);
      console.log(action.payload.data);
      state.user = action.payload.data;
    },
  },
});

export const { login } = counterSlice.actions;

export default counterSlice.reducer;
