import { createSlice } from "@reduxjs/toolkit";

export const personalSlice = createSlice({
    name: 'personal',
    initialState: {},
    reducers: {
        setPersonal: (state, action) => action.payload
    }
})

export const {setPersonal} = personalSlice.actions

export default personalSlice.reducer