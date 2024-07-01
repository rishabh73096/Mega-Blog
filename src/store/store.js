import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authslice";
const store = configureStore({
    reducer:{
        auth:authSlice,
        // Todo : add  more slice for post 
    }
});

export default store;