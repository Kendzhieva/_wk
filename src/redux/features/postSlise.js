import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import instance from 'assets/configs/instance.js';

export const createPost = createAsyncThunk(
    'posts/create',
    async (body, { rejectWithValue }) => {
        try {
            const accessToken = JSON.parse(localStorage.getItem("accessToken"))
            const response = await instance.post('posts', body, {
                headers: {
                    Authorization: `Bearer ${accessToken}`
                }
            });
            return response.data
        } catch (error) {
            return rejectWithValue(error.response.data || error.message);
        }
    }
);

export const getPosts = createAsyncThunk(
    'posts/get',
    async (_, { rejectWithValue }) => {
        try {
            const accessToken = JSON.parse(localStorage.getItem("accessToken"))
            const response = await instance.get('posts', {}, {
                headers: {
                    Authorization: `Bearer ${accessToken}`
                }
            });
            return response.data
        } catch (error) {
            return rejectWithValue(error.response.data || error.message);
        }
    }
);

export const setLikePost = createAsyncThunk(
    'posts/like',
    async ({ postId }, { rejectWithValue }) => {
        try {
            const userId = JSON.parse(localStorage.getItem('user'))._id
            const accessToken = JSON.parse(localStorage.getItem("accessToken"))
            const response = await instance.patch(`posts/like/${postId}`, {
                userId
            }, {
                headers: {
                    Authorization: `Bearer ${accessToken}`
                }
            });
            return response.data
        } catch (error) {
            return rejectWithValue(error.response.data || error.message);
        }
    }
);





const postsSlice = createSlice({
    name: 'post',
    initialState: {
        posts: [],
        status: 'idle',
        error: null,
    },
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(getPosts.fulfilled, (state, action) => {
            state.posts = action.payload
            state.status = 'success'
            state.error = null
        })
    }
});

export default postsSlice.reducer
