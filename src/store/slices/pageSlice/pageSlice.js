import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    title: '',
    pageStyle: false,
    searchAvailable: false,
    darkTheme: false,
    chatMeta: {
        brandId: null,
        brandName: null,
        brandImg: null,
        promoId: null
    },
    isContentHidden: false,
    pageNotifications: {
        wishlist: 3,
        gifts: 27,
        partner: 2,
    }
}

export const pageSlice = createSlice({
    name: 'pageMeta',
    initialState,
    reducers: {
        setPageTitle: (state, action) => {
            return {
                ...state,
                title: action.payload
            }
        },
        togglePageStyle: (state, action) => {
            return {
                ...state,
                pageStyle: !state.pageStyle
            }
        },
        setSearchAvailable: (state, action) => {
            return {
                ...state,
                searchAvailable: action.payload
            }
        },
        setDarkTheme: (state, action) => {
            return {
                ...state,
                darkTheme: action.payload
            }
        },
        setIsContentHidden: (state, action) => {
            return {
                ...state,
                isContentHidden: action.payload
            }
        },
        setChatMeta: (state, action) => {
            return {
                ...state,
                chatMeta: action.payload
            }
        }
    }
})

export const {
    setPageTitle,
    togglePageStyle,
    setSearchAvailable,
    setDarkTheme,
    setIsContentHidden,
    setChatMeta
} = pageSlice.actions

export default pageSlice.reducer