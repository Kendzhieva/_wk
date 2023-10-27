const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");
const { default: instance } = require("assets/configs/instance");

export const createChat = createAsyncThunk('chat/create',
    async (body, { rejectWithValue }) => {
        try {

            const accessToken = JSON.parse(localStorage.getItem("accessToken"))
            const response = await instance.post('chat', body, {
                headers: {
                    "Authorization": `Bearer ${accessToken}`
                }
            })

            return response.data

        } catch (error) {
            return rejectWithValue(error.message)
        }
    })

export const getAllChats = createAsyncThunk('chat/getAll',
    async (_, { rejectWithValue }) => {
        try {

            const accessToken = JSON.parse(localStorage.getItem("accessToken"))
            const response = await instance.get('chat', {
                headers: {
                    Authorization: `Bearer ${accessToken}`
                }
            })

            return response.data

        } catch (error) {
            return rejectWithValue(error.message)
        }
    })


const chatSlice = createSlice({
    name: 'chat',
    initialState: {
        status: 'idle',
        members: [],
        messages: [],
        list: [],
        error: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getAllChats.fulfilled, (state, action) => {
            state.status = 'success'
            state.list = action.payload
            state.error = null
        });
    }
})

export default chatSlice.reducer