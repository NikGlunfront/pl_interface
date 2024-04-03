import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    images: [],
    amount_left:0,
    name: "",
    description:"",
    shortDescription: "",
    location:"",
    locationRef: "",
    isRemote: false,
    lastStep: 1,
    adresses: [],
    tags: [],
    settings: {
        giftsAmount: 0,
        price_per_click: 0,
        date_end: null,
        citiesToShowIn: [],
        catsToShowIn: [],
    },
    delivery: {
        list: [], 
        description: ''
    },
    acts: {
        views:0,
        scs:0,
        wish:0,
    },
}

export const createPromoSlice = createSlice({
    name: 'createPromo',
    initialState,
    reducers: {
        setCreatePromoImages: (state, action) => {
            return {
                ...state,
                images: action.payload
            }
        },
        setCreatePromoLocation: (state, action) => {
            return {
                ...state,
                location: action.payload
            }
        },
        setCreatePromoFirstStep: (state, action) => {
            const { 
                name, 
                shortDescription, 
                location, 
                locationRef, 
                adresses,
                delivery,
                isRemote 
            } = action.payload
            return {
                ...state,
                name: name,
                shortDescription: shortDescription,
                location: location,
                locationRef: locationRef,
                isRemote: isRemote,
                adresses: adresses,
                delivery: delivery,
            }
        },
        setCreatePromoSecondStep: (state, action) => {
            const {
                description,
                tags
            } = action.payload
            return {
                ...state,
                description: description,
                tags: tags
            }
        },
        setCreatePromoStepPosition: (state, action) => {
            return {
                ...state,
                lastStep: action.payload
            }
        },
        setCreatePromoSettings: (state, action) => {
            return {
                ...state,
                settings: action.payload
            }
        },
        resetCreatePromo: (state, action) => {
            return initialState
        }
    }
})

export const {
    setCreatePromoImages,
    setCreatePromoLocation,
    setCreatePromoFirstStep,
    setCreatePromoStepPosition,
    setCreatePromoSecondStep,
    resetCreatePromo,
    setCreatePromoSettings
} = createPromoSlice.actions

export default createPromoSlice.reducer