import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    currentUser: null,
    isFetching: false,
    isError: false,
  },
  reducers: {
    loginStart: (state) => {
      state.isFetching = true;
      state.isError = false;

    },
    loginSuccess: (state, action) => {
      state.isFetching = false;
      state.currentUser = action.payload;
      state.isError = false;

    },
    loginFailure: (state) => {
      state.isFetching = false;
      state.isError = true;
    },
    registerStart: (state) => {
      state.isFetching = true;
      state.isError = false;

    },
    registerSuccess: (state) => {
      state.isFetching = false;
      state.isError = false;
      
    },
    registerFailure: (state) => {
      state.isFetching = false;
      state.isError = true;
    },
    logout: (state) => {
      state.currentUser = null;
    },
  },
});

export const { 
  loginStart,
  loginSuccess,
  loginFailure,
  logout,
  registerStart,
  registerFailure,
  registerSuccess} = userSlice.actions;
export default userSlice.reducer;
