import { configureStore } from '@reduxjs/toolkit';
import userReducer from './features/userSlice';
import postsReducer from './features/postSlise';

export const store = configureStore({
  reducer: {
    user: userReducer,
    posts: postsReducer
  },
});
