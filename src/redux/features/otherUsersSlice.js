import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import instance from "assets/configs/instance";

export const getUserByID = createAsyncThunk('otherUser/getById',
    async (reqUserId, { rejectWithValue }) => {
        try {
            const accessToken = JSON.parse(localStorage.getItem("accessToken"))
            const response = await instance.get(
                `users/${reqUserId}`, {},
                {
                    headers: { Authorization: `Bearer ${accessToken}` },
                }
            );
            return response.data
        } catch (error) {
            return rejectWithValue(error.response.data || error.message);
        }
    }
)

export const sendFriendRequest = createAsyncThunk('otherUser/friend-request',
    async (friendReqId, { rejectWithValue }) => {
        try {
            const userId = JSON.parse(localStorage.getItem('user'))
            const accessToken = JSON.parse(localStorage.getItem("accessToken"))
            const response = await instance.post(
                `request`,
                {
                    senderId: userId,
                    receiverId: friendReqId,
                },
                {
                    headers: { Authorization: `Bearer ${accessToken}` },
                }
            );
            return response.data
        } catch (error) {
            return rejectWithValue(error.response.data || error.message);
        }
    }
)

export const removeFriend = createAsyncThunk('otherUser/friend-remove-request',
    async (friendReqId, { rejectWithValue }) => {
        try {
            const userId = JSON.parse(localStorage.getItem('user'))
            const accessToken = JSON.parse(localStorage.getItem("accessToken"))
            const response = await instance.post(
                `user/friend/${userId}`,
                {
                    friendId: friendReqId,
                },
                {
                    headers: { Authorization: `Bearer ${accessToken}` },
                }
            );
            return response.data
        } catch (error) {
            return rejectWithValue(error.response.data || error.message);
        }
    }
)

export const getMyRequest = createAsyncThunk('otherUser/my-request',
    async (_, { rejectWithValue }) => {
        try {
            const userId = JSON.parse(localStorage.getItem('user'))
            const accessToken = JSON.parse(localStorage.getItem("accessToken"))
            const response = await instance.get(
                `my/request/${userId}`, {},
                {
                    headers: { Authorization: `Bearer ${accessToken}` },
                }
            );
            return response.data
        } catch (error) {
            return rejectWithValue(error.response.data || error.message);
        }
    }
)



const otherUsersSlics = createSlice({
    name: 'otherUsers',
    initialState: {
        user: null,
        status: 'idle',
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getUserByID.pending, (state) => {
            state.status = 'loading'
            state.error = null
        });
        builder.addCase(getUserByID.rejected, (state, action) => {
            state.status = 'error';
            state.error = action.payload;
        });
        builder.addCase(getUserByID.fulfilled, (state, action) => {
            state.user = action.payload
            state.status = 'success'
            state.error = null
        });
    },
});

export default otherUsersSlics.reducer;
