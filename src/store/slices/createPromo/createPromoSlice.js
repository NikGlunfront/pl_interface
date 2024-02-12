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
                isRemote 
            } = action.payload
            return {
                ...state,
                name: name,
                shortDescription: shortDescription,
                location: location,
                locationRef: locationRef,
                isRemote: isRemote
            }
        },
        setCreatePromoSecondStep: (state, action) => {
            const {
                description
            } = action.payload
            return {
                ...state,
                description: description
            }
        },
        setCreatePromoStepPosition: (state, action) => {
            return {
                ...state,
                lastStep: action.payload
            }
        }
    }
})

export const {
    setCreatePromoImages,
    setCreatePromoLocation,
    setCreatePromoFirstStep,
    setCreatePromoStepPosition,
    setCreatePromoSecondStep
} = createPromoSlice.actions

export default createPromoSlice.reducer