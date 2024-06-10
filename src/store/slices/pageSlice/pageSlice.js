import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    title: '',
    pageStyle: false,
    searchAvailable: false,
    isPageFreezed: false,
    darkTheme: false,
    adressToEdit: null,
    adressToDelete: null,
    scrollToRef: null,
    isHeaderSearchActive: false,
    isVisibleMainSort: false,
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
        setPageFreezedParam: (state, action) => {
            return {
                ...state,
                isPageFreezed: action.payload
            }
        },
        showActionsList: (state, action) => {
            return {
                ...state,
                actionsListsVisible: action.payload
            }
        },
        setAdressToEdit: (state, action) => {
            return {
                ...state,
                adressToEdit: action.payload
            }
        },
        setAdressToDelete: (state, action) => {
            return  {
                ...state,
                adressToDelete: action.payload
            }
        },
        setScrollRef: (state, action) => {
            return {
                ...state,
                scrollToRef: action.payload
            }
        },
        setHeaderSearchList: (state, action) => {
            return {
                ...state,
                isHeaderSearchActive: action.payload
            }
        },
        setVisibilityMainSort: (state, action) => {
            return {
                ...state,
                isVisibleMainSort: action.payload
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
    setChatMeta,
    setScrollRef,
    setAdressToDelete,
    setAdressToEdit,
    setHeaderSearchList,
    setPageFreezedParam,
    setVisibilityMainSort
} = pageSlice.actions

export default pageSlice.reducer