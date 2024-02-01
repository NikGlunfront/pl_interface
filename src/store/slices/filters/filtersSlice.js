import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    city: null,
    categories: null,
    activeCategoryTag: null,
    activeMyGiftsTag: null,
    activeWishlistTag: null,
    activeCity: {
        id: null,
        name: ''
    },
    tags: null
}

export const filtersSlice = createSlice({
    name: 'filters',
    initialState,
    reducers: {
        setCity: (state, action) => {
            return {
                ...state,
                city: action.payload,
                categories: null,
                tags: null
            }
        },
        setCategories: (state, action) => {
            return {
                ...state,
                categories: action.payload
            }
        },
        setActiveCity: (state, action) => {
            return {
                ...state,
                activeCity: action.payload,
                categories: null,
                tags: null
            }
        },
        setActiveTags: (state, action) => {
            return {
                ...state,
                tags: action.payload
            }
        },
        setActiveCategoryTag: (state, action) => {
            return {
                ...state,
                activeCategoryTag: action.payload
            }
        },
        setActiveMyGiftsTag: (state, action) => {
            return {
                ...state,
                activeMyGiftsTag: action.payload
            }
        },
        setActiveWishlistTag: (state, action) => {
            return {
                ...state,
                activeWishlistTag: action.payload
            }
        }
    }
})

export const {
    setCategories, 
    setCity,
    setActiveCategory,
    setActiveCity,
    setActiveTags,
    setActiveCategoryTag,
    setActiveMyGiftsTag,
    setActiveWishlistTag
} = filtersSlice.actions

export default filtersSlice.reducer