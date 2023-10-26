import instance from "assets/configs/instance";

const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

export const createGroup = createAsyncThunk('groups/create', async (body, { rejectWithValue }) => {
    try {
        const accessToken = localStorage.getItem("accessToken")

        const response = await instance.post(
            'groups', body, {
            headers: {
                "Authorization": `Bearer ${accessToken}`
            }
        }
        )

        return response.data

    } catch (err) {
        return rejectWithValue(err.response.data || err.message)
    }
})

export const changeGroup = createAsyncThunk('groups/change', async ({ body, groupId }, { rejectWithValue }) => {
    try {
        const accessToken = localStorage.getItem("accessToken")

        const response = await instance.patch(
            `groups/${groupId}`, body, {
            headers: {
                "Authorization": `Bearer ${accessToken}`
            }
        }
        )

        return response.data

    } catch (err) {
        return rejectWithValue(err.response.data || err.message)
    }
})

export const deleteGroup = createAsyncThunk('groups/delete', async (groupId, { rejectWithValue }) => {
    try {
        const accessToken = localStorage.getItem("accessToken")

        const response = await instance.delete(
            `groups/${groupId}`, {}, {
            headers: {
                "Authorization": `Bearer ${accessToken}`
            }
        }
        )

        return response.data

    } catch (err) {
        return rejectWithValue(err.response.data || err.message)
    }
})

export const getGroupInfo = createAsyncThunk('groups/get/info', async (groupId, { rejectWithValue }) => {
    try {

        const response = await instance.get(`groups/${groupId}`)

        return response.data

    } catch (err) {
        return rejectWithValue(err.response.data || err.message)
    }
})

export const getAllGroups = createAsyncThunk('groups/get/all', async (_, { rejectWithValue }) => {
    try {

        const response = await instance.get(`groups`)

        return response.data

    } catch (err) {
        return rejectWithValue(err.response.data || err.message)
    }
})

const groupsSlice = createSlice({
    name: 'groups',
    initialState: {
        status: 'idle',
        error: null,
        groups: []
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getAllGroups.fulfilled, (state, action) => {
            state.status = 'success'
            state.error = null
            state.groups = action.payload
        })
    }
})

export default groupsSlice.reducer