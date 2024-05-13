import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice.js"
import videoReducer from "../features/auth/videoSlice.js";
import subscriberReducer from "../features/auth/subscriberSlice.js";

export const store = configureStore({
    reducer: {
        auth: authReducer,
        video: videoReducer,
        subscriber : subscriberReducer
    }
})
