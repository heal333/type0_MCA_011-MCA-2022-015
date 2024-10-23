import { createSlice } from "@reduxjs/toolkit";
import { act } from "react";

const inputSlice = createSlice({
    name: "input",
    initialState: {
        currentKey: {},
    },
    reducers: {
        changeCurrentKey: (state, action) => {
            state.currentKey = action.payload;
        },
    },
});
export const { changeCurrentKey } = inputSlice.actions;
export default inputSlice;
