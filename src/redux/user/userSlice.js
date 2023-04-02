import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {},
  token: null,
  isLoggedIn: false,
};

const usersSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    register(state, { payload }) {
      state.user = payload;
      state.token = payload.accessToken;
      state.isLoggedIn = true;
    },
    logIn: (state, { payload }) => {
      console.log("payload", payload);
      state.user = payload.data.user;
      state.token = payload.data.token;
      state.isLoggedIn = true;
    },
    logOut: (state) => {
      state.user = {};
      state.token = null;
      state.isLoggedIn = false;
    },
    // refresh: (state, { payload }) => {
    //   state.user = payload.user;
    //   state.isLoggedIn = true;
    // },
  },
});
export const { register, logIn, logOut, refresh } = usersSlice.actions;
export default usersSlice.reducer;
