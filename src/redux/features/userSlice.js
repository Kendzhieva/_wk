import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import instance from 'assets/configs/instance.js';

export const registerUser = createAsyncThunk(
  'user/register',
  async (data, { rejectWithValue }) => {
    try {
      const { saveSession, ...userData } = data;
      const response = await instance.post('register', userData,);
      return { userResData: response.data, saveSession };
    } catch (error) {
      return rejectWithValue(error.response.data || error.message);
    }
  }
);

export const loginUser = createAsyncThunk(
  'user/login',
  async (data, { rejectWithValue }) => {
    try {
      const { saveSession, ...userData } = data;
      const response = await instance.post('http://localhost:3333/login', userData,);
      return { userResData: response.data, saveSession };
    } catch (error) {
      return rejectWithValue(error.response.data || error.message);
    }
  }
);

export const changeUserAvatar = createAsyncThunk(
  'user/change-avatar',
  async ({ avatarUrl, userId }, { rejectWithValue }) => {
    try {
      const accessToken = localStorage.getItem("accessToken")
      const response = await instance.patch(
        `users/avatar/${userId}`, { avatar: avatarUrl },
        { headers: { Authorization: `Bearer ${accessToken}` }, }
      );
      return { userResData: { user: response.data }, saveSession: true };
    } catch (error) {
      return rejectWithValue(error.response.data || error.message);
    }
  }
);

export const editUser = createAsyncThunk(
  'user/edit',
  async ({ userId, data }, { rejectWithValue }) => {
    try {
      const accessToken = localStorage.getItem("accessToken")
      const response = await instance.patch(
        `users/${userId}`, data,
        { headers: { Authorization: `Bearer ${accessToken}` }, }
      );
      return { userResData: { user: response.data }, saveSession: true };
    } catch (error) {
      return rejectWithValue(error.response.data || error.message);
    }
  }
);


//config states
const userSetState = (payload) => {
  const { userResData, saveSession } = payload;
  const { user, token } = userResData;
  try {
    if (!user) { throw new Error('User is undefined') }
    if (saveSession) {
      localStorage.setItem('user', JSON.stringify(user));
      token && localStorage.setItem('accessToken', JSON.stringify(token));
    } else {
      sessionStorage.setItem('user', JSON.stringify(user));
      token && sessionStorage.setItem('accessToken', JSON.stringify(token));
    }
  } catch (err) {
    console.log(err.message);
  }
  return user;

};

const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: localStorage.getItem('user')
      ? JSON.parse(localStorage.getItem('user'))
      : null,
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(registerUser.fulfilled, (state, action) => {
      state.user = userSetState(action.payload);
      state.status = 'success';
      state.error = null;
    });
    builder.addCase(registerUser.rejected, (state, action) => {
      state.status = 'error';
      state.error = action.payload || null;
    });
    builder.addCase(loginUser.fulfilled, (state, action) => {
      state.user = userSetState(action.payload);
      state.status = 'success';
      state.error = null;
    });
    builder.addCase(loginUser.rejected, (state, action) => {
      state.status = 'error';
      state.error = action.payload || null;
    });
    builder.addCase(editUser.fulfilled, (state, action) => {
      state.user = userSetState(action.payload);
      state.status = 'success';
      state.error = null;
    });
    builder.addCase(editUser.rejected, (state, action) => {
      state.status = 'error';
      state.error = action.payload || null;
    });
    builder.addCase(changeUserAvatar.fulfilled, (state, action) => {
      state.user = userSetState(action.payload);
      state.status = 'success';
      state.error = null;
    });
    builder.addCase(changeUserAvatar.rejected, (state, action) => {
      state.status = 'error';
      state.error = action.payload || null;
    });
  },
});

export default userSlice.reducer;
