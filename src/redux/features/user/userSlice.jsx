import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: {},
    account: {},
    isLoading: false
}

const userSlice = createSlice({
    name: 'user',
    initialState
})

export default userSlice