import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    currentUser: null,
  },
  reducers: {
    login: (state, action) => {
      state.currentUser = action.payload;
    },
    logout: (state, action) => {
      state.currentUser = null;
      console.log('log out in reducer');
    },
  },
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;
