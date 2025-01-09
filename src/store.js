import { configureStore } from "@reduxjs/toolkit";
import seatReducer from "../src/features/seatSlice";


const store = configureStore({
    reducer:{
        seats:seatReducer,
        },
})

export default store;