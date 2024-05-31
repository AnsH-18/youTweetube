import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    data: [],
    fetchedEmpty: true
}

const getCommentsOfVideo = createAsyncThunk(
    "comment/getCommentsOfVideo",
    async (videoId) => {
        const baseUrl = "http://localhost:8001/api/v1/comment/get-all/:"
        const url = new URL(baseUrl)
        url.searchParams.set("videoId", videoId)
        const response = await fetch(url, {
            method: 'GET',
            credentials: "include"
        })
        const data = await response.json()
        console.log(data)
        return data
    }
)

const addComment = createAsyncThunk(
    "comment/addComment",
    async (input) => {
        console.log(input)
        const baseUrl = "http://localhost:8001/api/v1/comment/add/:"
        const url = new URL(baseUrl)
        url.searchParams.set("videoId", input.videoId)
        const response = await fetch(url, {
            method: 'POST',
            body: JSON.stringify({content: input.content}),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
            credentials: "include"
        })
        console.log(2)
        const data = await response.json()
        console.log(data)
        return data
    }
)

const commentSlice = createSlice({
    name:"comment",
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder
        .addCase(getCommentsOfVideo.fulfilled, (state, action) => {
            state.data = action.payload.data
            state.fetchedEmpty = action.payload.data.length === 0 ? true : false
        })
        .addCase(addComment.fulfilled, (state, action) => {
            
        })
    }
})

export {getCommentsOfVideo, addComment}
export default commentSlice.reducer