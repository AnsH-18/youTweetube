import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    data: []
}

const getAllVideos = createAsyncThunk(
    "video/getAll", 
    async () => {
        const url = "http://localhost:8001/api/v1/video/get-all"
        const response = await fetch(url,  {
            method: 'GET',
            credentials: "include"
        })
        const data = await response.json()
        return data
    }
)

const getLikedVideosByUser = createAsyncThunk(
    "videos/getLikedVideos",
    async (userId) => {
        const url = `http://localhost:8001/api/v1/like/get-all`
        const response = await fetch(url, {
            method: 'GET',
            credentials: "include"
        })
        const data = await response.json()
       
        return data.data[0].videos
    }
)

const videoSlice = createSlice({
    name: "video",
    initialState,
    reducers: {
        
    },
    extraReducers: (builder) => {
        builder
        .addCase(getAllVideos.fulfilled, (state, action) => {
            state.data = action.payload.data
        })
        .addCase(getLikedVideosByUser.fulfilled, (state, action) => {
            state.data = action.payload
        })
    }
})

export {getAllVideos, getLikedVideosByUser}
export default videoSlice.reducer