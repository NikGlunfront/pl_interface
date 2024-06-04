import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    balance: '0',
}

export const accountSlice = createSlice({
    name: 'account',
    initialState,
    reducers: {
        setBalance: (state, action) => {
            return {
                ...state,
                balance: action.payload
            }
        }
    }
})

export const {
    setBalance
} = accountSlice.actions

export default accountSlice.reducer