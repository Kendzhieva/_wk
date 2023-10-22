import { configureStore } from '@reduxjs/toolkit';
import userReducer from './features/userSlice';
import postsReducer from './features/postSlice';
import otherUsersReducer from './features/otherUsersSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    posts: postsReducer,
    otherUsers: otherUsersReducer
  },
});
