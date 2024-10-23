import { configureStore } from "@reduxjs/toolkit";
import inputSlice from "./inputSlice";

const appStore = configureStore({
    reducer: {
        input: inputSlice.reducer,
    },
});

export default appStore;
