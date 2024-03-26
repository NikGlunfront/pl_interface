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
        /* 
            [
                {id: 1, city_id: 1, adress: 'metro', map_url: 'https://...'},
                {id: 2, city_id: 1, adress: 'metro 123', map_url: 'https://...'},
                {id: 3, city_id: 2, adress: 'metro 321', map_url: 'https://...'},
            ]
        */
        adress: [
            {id: 1, city_id: 2, adress: 'metro2', map_url: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d34945.33441969031!2d60.51966905593872!3d56.81020010921794!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x43c16f19ce9d6961%3A0x9fdd3fc86c3eb2f1!2z0KHQstC10YDQtNC70L7QstGB0LrQsNGPINC-0LHQu9Cw0YHRgtC90LDRjyDQutC70LjQvdC40YfQtdGB0LrQsNGPINCx0L7Qu9GM0L3QuNGG0LAg4oSWMQ!5e0!3m2!1sru!2sru!4v1711017618097!5m2!1sru!2sr'},
            {id: 2, city_id: 1, adress: 'metro2', map_url: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d34945.33441969031!2d60.51966905593872!3d56.81020010921794!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x43c16f19ce9d6961%3A0x9fdd3fc86c3eb2f1!2z0KHQstC10YDQtNC70L7QstGB0LrQsNGPINC-0LHQu9Cw0YHRgtC90LDRjyDQutC70LjQvdC40YfQtdGB0LrQsNGPINCx0L7Qu9GM0L3QuNGG0LAg4oSWMQ!5e0!3m2!1sru!2sru!4v1711017618097!5m2!1sru!2sr'},
            {id: 3, city_id: 3, adress: 'metro2', map_url: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d34945.33441969031!2d60.51966905593872!3d56.81020010921794!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x43c16f19ce9d6961%3A0x9fdd3fc86c3eb2f1!2z0KHQstC10YDQtNC70L7QstGB0LrQsNGPINC-0LHQu9Cw0YHRgtC90LDRjyDQutC70LjQvdC40YfQtdGB0LrQsNGPINCx0L7Qu9GM0L3QuNGG0LAg4oSWMQ!5e0!3m2!1sru!2sru!4v1711017618097!5m2!1sru!2sr'},
            {id: 4, city_id: 2, adress: 'metro2', map_url: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d34945.33441969031!2d60.51966905593872!3d56.81020010921794!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x43c16f19ce9d6961%3A0x9fdd3fc86c3eb2f1!2z0KHQstC10YDQtNC70L7QstGB0LrQsNGPINC-0LHQu9Cw0YHRgtC90LDRjyDQutC70LjQvdC40YfQtdGB0LrQsNGPINCx0L7Qu9GM0L3QuNGG0LAg4oSWMQ!5e0!3m2!1sru!2sru!4v1711017618097!5m2!1sru!2sr'},
            {id: 5, city_id: 1, adress: 'metro2', map_url: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d34945.33441969031!2d60.51966905593872!3d56.81020010921794!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x43c16f19ce9d6961%3A0x9fdd3fc86c3eb2f1!2z0KHQstC10YDQtNC70L7QstGB0LrQsNGPINC-0LHQu9Cw0YHRgtC90LDRjyDQutC70LjQvdC40YfQtdGB0LrQsNGPINCx0L7Qu9GM0L3QuNGG0LAg4oSWMQ!5e0!3m2!1sru!2sru!4v1711017618097!5m2!1sru!2sr'},
            {id: 6, city_id: 3, adress: 'metro2', map_url: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d34945.33441969031!2d60.51966905593872!3d56.81020010921794!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x43c16f19ce9d6961%3A0x9fdd3fc86c3eb2f1!2z0KHQstC10YDQtNC70L7QstGB0LrQsNGPINC-0LHQu9Cw0YHRgtC90LDRjyDQutC70LjQvdC40YfQtdGB0LrQsNGPINCx0L7Qu9GM0L3QuNGG0LAg4oSWMQ!5e0!3m2!1sru!2sru!4v1711017618097!5m2!1sru!2sr'},
            {id: 7, city_id: 3, adress: 'metro2', map_url: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d34945.33441969031!2d60.51966905593872!3d56.81020010921794!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x43c16f19ce9d6961%3A0x9fdd3fc86c3eb2f1!2z0KHQstC10YDQtNC70L7QstGB0LrQsNGPINC-0LHQu9Cw0YHRgtC90LDRjyDQutC70LjQvdC40YfQtdGB0LrQsNGPINCx0L7Qu9GM0L3QuNGG0LAg4oSWMQ!5e0!3m2!1sru!2sru!4v1711017618097!5m2!1sru!2sr'},
            {id: 8, city_id: 3, adress: 'metro2', map_url: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d34945.33441969031!2d60.51966905593872!3d56.81020010921794!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x43c16f19ce9d6961%3A0x9fdd3fc86c3eb2f1!2z0KHQstC10YDQtNC70L7QstGB0LrQsNGPINC-0LHQu9Cw0YHRgtC90LDRjyDQutC70LjQvdC40YfQtdGB0LrQsNGPINCx0L7Qu9GM0L3QuNGG0LAg4oSWMQ!5e0!3m2!1sru!2sru!4v1711017618097!5m2!1sru!2sr'},
            {id: 9, city_id: 3, adress: 'metro2', map_url: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d34945.33441969031!2d60.51966905593872!3d56.81020010921794!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x43c16f19ce9d6961%3A0x9fdd3fc86c3eb2f1!2z0KHQstC10YDQtNC70L7QstGB0LrQsNGPINC-0LHQu9Cw0YHRgtC90LDRjyDQutC70LjQvdC40YfQtdGB0LrQsNGPINCx0L7Qu9GM0L3QuNGG0LAg4oSWMQ!5e0!3m2!1sru!2sru!4v1711017618097!5m2!1sru!2sr'},
            {id: 10, city_id: 2, adress: 'metro2', map_url: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d34945.33441969031!2d60.51966905593872!3d56.81020010921794!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x43c16f19ce9d6961%3A0x9fdd3fc86c3eb2f1!2z0KHQstC10YDQtNC70L7QstGB0LrQsNGPINC-0LHQu9Cw0YHRgtC90LDRjyDQutC70LjQvdC40YfQtdGB0LrQsNGPINCx0L7Qu9GM0L3QuNGG0LAg4oSWMQ!5e0!3m2!1sru!2sru!4v1711017618097!5m2!1sru!2sr'}
        ]
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