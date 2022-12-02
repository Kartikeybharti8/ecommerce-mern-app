import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import { publicRequest } from "../requestMethods";
// import { register } from "./apiCalls";

// export const registerUser = createAsyncThunk('register', async (user) => {
//   const res = await publicRequest.post('/auth/register', user);
//   return res
// })

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
      state.isError = null;
      
    },
    registerFailure: (state) => {
      state.isFetching = false;
      state.isError = true;
    },
    logout: (state) => {
      state.currentUser = null;
    },
  }
  // extraReducers: builder => {
  //   builder.addCase(registerUser.pending, (state, action) => {
  //     state.isFetching = true
  //     state.isError = false
  //   }).addCase(registerUser.fulfilled, (state, action) => {
  //     state.isFetching = false
  //     state.currentUser = {}
  //     console.log(action)
  //   })
  //   .addCase(registerUser.rejected, (state, action) => {
  //     state.isFetching = false
  //     state.isError = true
  //     console.log(action)
  //   })
  // }
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
