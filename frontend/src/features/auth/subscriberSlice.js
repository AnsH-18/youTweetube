import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    data: [],
    empty: true
}

const getChannelSubscribers = createAsyncThunk(
    "susbcriber/getChannelSubscriber", 
    async (userId) => {
        const baseUrl = 'http://localhost:8001/api/v1/subscriptions/channel-subscribers/:'
        const url = new URL(baseUrl)
        url.searchParams.set("channelId", userId)
        const response = await fetch(url, {
            method: 'GET',
            credentials: "include"
        })
        const data = await response.json()
       if(data.data[0]){
        return data.data[0].subscriberDetails
       }
       else{
        return []
       }
    }
)


const subscribersSlice = createSlice({
    name: "subscriber",
    initialState,
    extraReducers: (builder) => {
        builder
        .addCase(getChannelSubscribers.fulfilled, (state, action) => {
            state.data = action.payload
            state.empty = action.payload.length === 0 ? true : false
        })
    }
})


export {getChannelSubscribers}
export default subscribersSlice.reducer