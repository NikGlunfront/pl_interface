import { createSlice } from "@reduxjs/toolkit"

const initialState ={
    tg_id: '',
    hasCompany: false,
    company: {
        name: '',
        icon: ''
    }
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
        },
        setBrand: (state, action) => {
            return {
                ...state,
                company: action.payload
            }
        }
    }
})

export const {
    setHasCompany,
    setBrand
} = userSlice.actions

export default userSlice.reducer