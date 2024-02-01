import { createSlice } from "@reduxjs/toolkit"
import item1 from '../../../assets/img/promos/item1.png'
import item2 from '../../../assets/img/promos/item2.png'
import item3 from '../../../assets/img/promos/item3.png'
import brandMegafon from '../../../assets/img/icons/partners/megafon.png'
import brandMts from '../../../assets/img/icons/partners/mts.png'
import brandApple from '../../../assets/img/icons/partners/apple.svg'

const initialState = {
    listing: [],
    my_gifts: [],
    wishlist: [],
    loadedPromoByIdList: [],
    currentPromo: null
}

const promos = [
    {id: 6, img: item3, amount_left: 134, name: 'Apple Watch', description: 'Купи iPhone и получишь Apple Watch в подарок.', location: "Москва, м. Спортивная", acts: {views: 145, scs: 45, wish: 63}, brand_id: 3, brand_name: "Apple", brand_img: brandApple, brand_contacts: {phone: "79995553333", telegram: "https://tg.me/paymeg", whatsapp: "+79995553333", facebook: "facebook.com", website: "google.com"}, brand_role: 'Магазин электроники'},
    {id: 1, img: item1, amount_left: 134, name: 'Телевизор в подарок', description: 'Купи ноутбук, получишь телевизор в подарок.', location: "Москва, м. Спортивная", acts: {views: 145, scs: 45, wish: 63}, brand_id: 1, brand_name: "Мегафон", brand_img: brandMegafon, brand_contacts: {phone: "79995553333", telegram: "https://tg.me/paymeg", whatsapp: "+79995553333", facebook: "facebook.com", website: "google.com"}, brand_role: 'Магазин электроники'},
    {id: 2, img: item2, amount_left: 56, name: 'Подарочный набор', description: 'Купи ноутбук, получишь телевизор в подарок.', location: "Арамболь, Гиркарвада", acts: {views: 145, scs: 45, wish: 63}, brand_id: 2, brand_name: "МТС", brand_img: brandMts, brand_contacts: {phone: "79995553333", telegram: "https://tg.me/paymeg", whatsapp: "+79995553333", facebook: "facebook.com", website: "google.com"}, brand_role: 'Магазин электроники'},
    {id: 3, img: item1, amount_left: 134, name: 'Телевизор в подарок', description: 'Купи ноутбук, получишь телевизор в подарок.', location: "Москва, м. Спортивная", acts: {views: 145, scs: 45, wish: 63}, brand_id: 1, brand_name: "Мегафон", brand_img: brandMegafon, brand_contacts: {phone: "79995553333", telegram: "https://tg.me/paymeg", whatsapp: "+79995553333", facebook: "facebook.com", website: "google.com"}, brand_role: 'Магазин электроники'},
    {id: 4, img: item2, inactive: true, amount_left: 56, name: 'Подарочный набор', description: 'Купи ноутбук, получишь телевизор в подарок.', location: "Арамболь, Гиркарвада", acts: {views: 145, scs: 45, wish: 63}, brand_id: 2, brand_name: "МТС", brand_img: brandMts, brand_contacts: {phone: "79995553333", telegram: "https://tg.me/paymeg", whatsapp: "+79995553333", facebook: "facebook.com", website: "google.com"}, brand_role: 'Магазин электроники'},
    {id: 5, img: item2, amount_left: 56, name: 'Подарочный набор', description: 'Купи ноутбук, получишь телевизор в подарок.', location: "Арамболь, Гиркарвада", acts: {views: 145, scs: 45, wish: 63}, brand_id: 1, brand_name: "Мегафон", brand_img: brandMegafon, brand_contacts: {phone: "79995553333", telegram: "https://tg.me/paymeg", whatsapp: "+79995553333", facebook: "facebook.com", website: "google.com"}, brand_role: 'Магазин электроники'},
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
                my_gifts: [...promos]
            }
        },
        setWishlistData: (state, action) => {
            return {
                ...state,
                wishlist: [...promos]
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
                let newPromo = promos.filter(item => item.id == action.payload)[0]
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