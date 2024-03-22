import { createSlice } from "@reduxjs/toolkit"

const initialState ={
    tg_id: '',
    hasCompany: false,
    lang: 'en',
    company: {
        name: '',
        description: '',
        icon: '',
        contacts: {},
        adress: []
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
        },
        setInterfaceLang: (state, action) => {
            return {
                ...state,
                lang: action.payload
            }
        }
    }
})

export const {
    setHasCompany,
    setCompany,
    setCompanyContacts,
    setInterfaceLang
} = userSlice.actions

export default userSlice.reducer