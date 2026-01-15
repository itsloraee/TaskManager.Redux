import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "../(tabs)/store/slices/taskSlice";

export const store = configureStore({
    reducer: { 
        task: taskReducer
    }
})