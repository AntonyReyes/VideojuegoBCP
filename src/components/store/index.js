import { configureStore } from "@reduxjs/toolkit";
import user from "./slices/user.slice";
import personal from "./slices/personal.slice";


export default configureStore({
    reducer: {
        user,
        personal
    }
})