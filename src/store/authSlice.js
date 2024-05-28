import { createSlice } from "@reduxjs/toolkit"

// initial state store sai puchu ki user authenticate hai ya nhi
const initialState = {
    status: false,
    userData: null
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        login: (state, action) => {
            state.status = true,
                state.userData = action.payload.userData
        },
        logout: (state, action) => {
            state.status = false
            state.userData = null
        }
    }
})
// post slice bhi bna hai 
export const { login, logout } = authSlice.actions

export default authSlice.reducer
