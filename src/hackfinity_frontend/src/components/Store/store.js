// store.js
import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/user/userSlice'; // Adjust the path as necessary

const store = configureStore({
  reducer: {
    user: userReducer,
  },
});

export default store;
