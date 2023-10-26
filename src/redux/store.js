import { configureStore } from '@reduxjs/toolkit';
import userReducer from './features/userSlice';
import postsReducer from './features/postSlice';
import otherUsersReducer from './features/otherUsersSlice';
import groupsReducer from './features/groupsSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    posts: postsReducer,
    otherUsers: otherUsersReducer,
    groups: groupsReducer
  },
});
