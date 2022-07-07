import { createSlice, PayloadAction } from "@reduxjs/toolkit"

const name = 'auth';

type stateType = {
    user: {
        name: string;
        email: string;
    }
    jwt: string;
}

const initialState: stateType = {
    user: {
        name: '',
        email: ''
    },
    jwt: '',
}

export const authSlice = createSlice({
    name,
    initialState,
    reducers: {
        setUserInfo: (state, action:PayloadAction<{name: string, email: string}>) => {
            state.user.email = action.payload.name;
            state.user.email = action.payload.email;
        }
    }
})