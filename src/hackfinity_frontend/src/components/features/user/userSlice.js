import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    loggedInUserRef: null,
    currentUserRole: null,
    accessToken: null,
  },
  reducers: {
    setLoggedInUserRef: (state, action) => {
      state.loggedInUserRef = action.payload.loggedInUserRef;
    },
    setCurrentUserRole: (state, action) => {
      state.currentUserRole = action.payload.currentUserRole;
    },
    setAccessToken: (state, action) => {
      state.accessToken = action.payload.accessToken;
    },
  },
  // extraReducers: {},
});

export const { setLoggedInUserRef, setCurrentUserRole, setAccessToken } = userSlice.actions;

export const selectLoggedInUserRef = (state) => state.user.loggedInUserRef;
export const selectCurrentUserRole = (state) => state.user.currentUserRole;
export const selectAccessToken = (state) => state.user.accessToken;

export default userSlice.reducer;
