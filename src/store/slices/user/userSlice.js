import { createSlice } from "@reduxjs/toolkit"

const initialState ={
    tg_id: '',
    hasCompany: false,
    company: {
        name: '',
        description: '',
        icon: '',
        contacts: {}
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
        setCompany: (state, action) => {
            return {
                ...state,
                company: action.payload,
                hasCompany: true
            }
        },
        setCompanyContacts: (state, action) => {
            return {
                ...state,
                company: {
                    ...state.company,
                    contacts: action.payload
                }
            }
        }
    }
})

export const {
    setHasCompany,
    setCompany,
    setCompanyContacts
} = userSlice.actions

export default userSlice.reducer