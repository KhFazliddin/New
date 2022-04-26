import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users:[],
  user:{},
  loggedIn: false,
};

export const userSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.users = [...state.users, action.payload];
    },
    logIn:(state,action)=>{
      state.user=action.payload;
      state.loggedIn=true
    }
  },
});

export const { addUser,logIn} = userSlice.actions;

export default userSlice.reducer;
