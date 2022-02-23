import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: JSON.parse(localStorage.getItem("userData")),
  signedUp: false,
  signedIn: false,
};

export const userSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.user = [...state.user, action.payload];
    },
  },
});

export const { addUser } = userSlice.actions;

export default userSlice.reducer;
