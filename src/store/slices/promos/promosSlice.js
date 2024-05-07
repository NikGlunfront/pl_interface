import { createSlice } from "@reduxjs/toolkit"
import item1 from '../../../assets/img/promos/citilink_main.jpg'
import item2 from '../../../assets/img/promos/cum_main.png'
import item3 from '../../../assets/img/promos/item3.png'
import brandMegafon from '../../../assets/img/icons/partners/citilink_logo.jpg'
import brandMts from '../../../assets/img/icons/partners/cum_logo.png'
import brandApple from '../../../assets/img/icons/partners/apple.svg'

const initialState = {
    listing: [],
    my_gifts: [],
    wishlist: [],
    loadedPromoByIdList: [],
    currentPromo: null
}

const adresses = [
    {id: 1, city_id: 2, adress: 'metro2 metro2 произвольный адрес - ориентир на карте, чтобы легче было найти место', map_url: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d34945.33441969031!2d60.51966905593872!3d56.81020010921794!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x43c16f19ce9d6961%3A0x9fdd3fc86c3eb2f1!2z0KHQstC10YDQtNC70L7QstGB0LrQsNGPINC-0LHQu9Cw0YHRgtC90LDRjyDQutC70LjQvdC40YfQtdGB0LrQsNGPINCx0L7Qu9GM0L3QuNGG0LAg4oSWMQ!5e0!3m2!1sru!2sru!4v1711017618097!5m2!1sru!2sr'},
    {id: 2, city_id: 1, adress: 'metro3 metro2 произвольный адрес - ориентир на карте, чтобы легче было найти место', map_url: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d34945.33441969031!2d60.51966905593872!3d56.81020010921794!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x43c16f19ce9d6961%3A0x9fdd3fc86c3eb2f1!2z0KHQstC10YDQtNC70L7QstGB0LrQsNGPINC-0LHQu9Cw0YHRgtC90LDRjyDQutC70LjQvdC40YfQtdGB0LrQsNGPINCx0L7Qu9GM0L3QuNGG0LAg4oSWMQ!5e0!3m2!1sru!2sru!4v1711017618097!5m2!1sru!2sr'},
    {id: 3, city_id: 3, adress: 'metro1 metro2 произвольный адрес - ориентир на карте, чтобы легче было найти место', map_url: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d34945.33441969031!2d60.51966905593872!3d56.81020010921794!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x43c16f19ce9d6961%3A0x9fdd3fc86c3eb2f1!2z0KHQstC10YDQtNC70L7QstGB0LrQsNGPINC-0LHQu9Cw0YHRgtC90LDRjyDQutC70LjQvdC40YfQtdGB0LrQsNGPINCx0L7Qu9GM0L3QuNGG0LAg4oSWMQ!5e0!3m2!1sru!2sru!4v1711017618097!5m2!1sru!2sr'},
    {id: 4, city_id: 2, adress: 'metro2 metro2 произвольный адрес - ориентир на карте, чтобы легче было найти место', map_url: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d34945.33441969031!2d60.51966905593872!3d56.81020010921794!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x43c16f19ce9d6961%3A0x9fdd3fc86c3eb2f1!2z0KHQstC10YDQtNC70L7QstGB0LrQsNGPINC-0LHQu9Cw0YHRgtC90LDRjyDQutC70LjQvdC40YfQtdGB0LrQsNGPINCx0L7Qu9GM0L3QuNGG0LAg4oSWMQ!5e0!3m2!1sru!2sru!4v1711017618097!5m2!1sru!2sr'},
    {id: 5, city_id: 1, adress: 'metro3 metro2 произвольный адрес - ориентир на карте, чтобы легче было найти место', map_url: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d34945.33441969031!2d60.51966905593872!3d56.81020010921794!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x43c16f19ce9d6961%3A0x9fdd3fc86c3eb2f1!2z0KHQstC10YDQtNC70L7QstGB0LrQsNGPINC-0LHQu9Cw0YHRgtC90LDRjyDQutC70LjQvdC40YfQtdGB0LrQsNGPINCx0L7Qu9GM0L3QuNGG0LAg4oSWMQ!5e0!3m2!1sru!2sru!4v1711017618097!5m2!1sru!2sr'},
]

const deliveries = {
    list: [3,2,4],
    description: 'СДЕК, Почта России, доставка курьером.'
}

const pausedPromo = [{id: 7, img: [item3, item3], date_end: '2024-04-24T19:00:00.000Z', inactive:true, amount_left: 134, name: 'Apple Watch', description: 'Купи iPhone и получишь Apple Watch в подарок.', location: "Москва, м. Спортивная", acts: {views: 145, scs: 45, wish: 63}, brand_id: 3, brand_name: "Apple", brand_img: brandApple, brand_contacts: {phone: "79995553333", telegram: "https://tg.me/paymeg", whatsapp: "+79995553333", facebook: "facebook.com", website: "google.com"}, brand_role: 'Магазин электроники', adresses: [], delivery: deliveries}]


const promos = [
    {id: 6, img: [item3, item3], date_end: '2024-04-24T19:00:00.000Z', amount_left: 134, name: 'Apple Watch', description: 'Купи iPhone и получишь Apple Watch в подарок.', location: "Москва, м. Спортивная", acts: {views: 145, scs: 45, wish: 63}, brand_id: 3, brand_name: "Apple", brand_img: brandApple, brand_contacts: {phone: "79995553333", telegram: "https://tg.me/paymeg", whatsapp: "+79995553333", facebook: "facebook.com", website: "google.com", tg: 'https://t.me/pl_bot'}, brand_role: 'Магазин электроники', adresses: [], delivery: deliveries},
    {id: 1, img: [item1, item1], date_end: '2024-04-22T19:00:00.000Z', amount_left: 134, name: 'Телевизор в подарок, второй в подарок', description: 'Купи ноутбук, получишь телевизор в подарок. Купи ноутбук, получишь телевизор в подарок. Купи ноутбук, получишь телевизор в подарок. Купи ноутбук, получишь телевизор в подарок.', location: "Москва, м. Спортивная", acts: {views: 145, scs: 45, wish: 63}, brand_id: 1, brand_name: "Ситилинк", brand_img: brandMegafon, brand_contacts: {phone: "79995553333", telegram: "https://tg.me/paymeg", whatsapp: "+79995553333", facebook: "facebook.com", website: "google.com", tg: 'https://t.me/pl_bot'}, brand_role: 'Магазин электроники', adresses: adresses, delivery: {list: [], description: ''}},
    {id: 2, img: [item2, item2], date_end: '2024-04-23T19:00:00.000Z', amount_left: 56, name: 'Подарочный набор', description: 'Купи ноутбук, получишь телевизор в подарок. Купи ноутбук, получишь телевизор в подарок. Купи ноутбук, получишь телевизор в подарок. Купи ноутбук, получишь телевизор в подарок.', location: "Арамболь, Гиркарвада", acts: {views: 145, scs: 45, wish: 63}, brand_id: 2, brand_name: "ЦУМ", brand_img: brandMts, brand_contacts: {phone: "79995553333", telegram: "https://tg.me/paymeg", whatsapp: "+79995553333", facebook: "facebook.com", website: "google.com", tg: 'https://t.me/pl_bot'}, brand_role: 'Магазин электроники', adresses: adresses, delivery: deliveries},
    {id: 3, img: [item1, item1], date_end: '2024-04-27T19:00:00.000Z', amount_left: 134, name: 'Телевизор в подарок, второй в подарок', description: 'Купи ноутбук, получишь телевизор в подарок. Купи ноутбук, получишь телевизор в подарок. Купи ноутбук, получишь телевизор в подарок. Купи ноутбук, получишь телевизор в подарок.', location: "Москва, м. Спортивная", acts: {views: 145, scs: 45, wish: 63}, brand_id: 1, brand_name: "Ситилинк", brand_img: brandMegafon, brand_contacts: {phone: "79995553333", telegram: "https://tg.me/paymeg", whatsapp: "+79995553333", facebook: "facebook.com", website: "google.com", tg: 'https://t.me/pl_bot'}, brand_role: 'Магазин электроники', adresses: adresses, delivery: deliveries},
    {id: 4, img: [item2, item2], date_end: '2024-05-24T19:00:00.000Z', inactive: false, amount_left: 56, name: 'Подарочный набор, второй в подарок', description: 'Купи ноутбук, получишь телевизор в подарок. Купи ноутбук, получишь телевизор в подарок. Купи ноутбук, получишь телевизор в подарок. Купи ноутбук, получишь телевизор в подарок.', location: "Арамболь, Гиркарвада", acts: {views: 145, scs: 45, wish: 63}, brand_id: 2, brand_name: "ЦУМ", brand_img: brandMts, brand_contacts: {phone: "79995553333", telegram: "https://tg.me/paymeg", whatsapp: "+79995553333", facebook: "facebook.com", website: "google.com", tg: 'https://t.me/pl_bot'}, brand_role: 'Магазин электроники', adresses: adresses, delivery: deliveries},
    {id: 5, img: [item2, item2], date_end: '2024-07-22T19:00:00.000Z', amount_left: 56, name: 'Подарочный набор, второй в подарок', description: 'Купи ноутбук, получишь телевизор в подарок. Купи ноутбук, получишь телевизор в подарок. Купи ноутбук, получишь телевизор в подарок. Купи ноутбук, получишь телевизор в подарок.', location: "Арамболь, Гиркарвада", acts: {views: 145, scs: 45, wish: 63}, brand_id: 1, brand_name: "Ситилинк", brand_img: brandMegafon, brand_contacts: {phone: "79995553333", telegram: "https://tg.me/paymeg", whatsapp: "+79995553333", facebook: "facebook.com", website: "google.com", tg: 'https://t.me/pl_bot'}, brand_role: 'Магазин электроники', adresses: adresses, delivery: deliveries},
]

export const promosSlice = createSlice({
    name: 'promos',
    initialState,
    reducers: {
        setListingData: (state, action) => {
            return {
                ...state,
                listing: [...promos]
            }
        },
        setMyGiftsData: (state, action) => {
            return {
                ...state,
                my_gifts: [...pausedPromo,...promos]
            }
        },
        setWishlistData: (state, action) => {
            return {
                ...state,
                wishlist: [...pausedPromo, ...promos]
            }
        },
        getCurrentPromo: (state, action) => {
            let promoLoaded = state.loadedPromoByIdList.length > 0 ? state.loadedPromoByIdList.filter(item => item.id == action.payload) : []
            if (promoLoaded.length > 0) {
                return {
                    ...state,
                    currentPromo: promoLoaded[0]
                }
            } else {
                let newPromo = [...promos, ...pausedPromo].filter(item => item.id == action.payload)[0]
                console.log(promos, action.payload)
                return {
                    ...state,
                    currentPromo: newPromo,
                    loadedPromoByIdList: [newPromo]
                }
            }
        },
        setNullListingData: (state, action) => {
            return {
                ...state,
                listing: []
            }
        },
        setNullMyGiftsData: (state, action) => {
            return {
                ...state,
                my_gifts: []
            }
        },
        setNullWishlistData: (state, action) => {
            return {
                ...state,
                wishlist: []
            }
        },
    }
})

export const {
    setListingData,
    setMyGiftsData,
    setWishlistData,
    getCurrentPromo,
    setNullListingData,
    setNullMyGiftsData,
    setNullWishlistData
} = promosSlice.actions

export default promosSlice.reducer