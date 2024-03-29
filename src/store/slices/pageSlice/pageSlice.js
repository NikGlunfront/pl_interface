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
    },
    actionsListsVisible: false
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
        },
        showActionsList: (state, action) => {
            return {
                ...state,
                actionsListsVisible: action.payload
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
    showActionsList,
    setChatMeta
} = pageSlice.actions

export default pageSlice.reducer