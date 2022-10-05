import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    loggedIn: false,
    token: "",
    role: "",
    user: {}
}

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        login: (state) => {
            state.loggedIn = true
        },
        logout: (state) => {
            state.loggedIn = initialState.loggedIn
            state.token = initialState.token
            state.role = initialState.role
            state.user = initialState.user
            // state = initialState
        },
        update: (state, action) => {
            state = action.payload
        },
        setToken: (state, action) => {
            state.token = action.payload
        },
        setUser: (state, action) => {
            state.user = action.payload
        },
        setRole: (state, action) => {
            state.role = action.payload
        }
    }
})

export const authActions = authSlice.actions
export const authSelectors = {
    selectLoggedIn: state => state.auth.loggedIn,
    selectToken: state => state.auth.token,
    selectRole: state => state.auth.role,
    selectUser: state => state.auth.user,
    selectAuth: state => state.auth
}

export default authSlice.reducer