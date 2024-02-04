import { createSlice } from "@reduxjs/toolkit"

const initialState ={
    tg_id: '',
    hasCompany: false
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setHasCompany: (state, action) => {
            return {
                ...state,
                hasCompany: action.payload
            }
        }
    }
})

export const {
    setHasCompany
} = userSlice.actions

export default userSlice.reducer