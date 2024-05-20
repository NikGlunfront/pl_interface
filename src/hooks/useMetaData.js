import { useSelector } from "react-redux"
import { useTranslate } from "./useTranslate"
import { useNavigate } from "react-router-dom"
import { PL_APP_ROUTES } from "../vars/routes"

const langsData = [
   { lang_code: "ru", text: "РУС", icon: "lang-ru" },
   { lang_code: "en", text: "ENG", icon: "lang-en" },
]

const menuItems = [
    {name: 'Menu.PartnerCabinet', type: "partner", icon: 'menu-lc', pathTo: '/partner', active: false},
    {name: 'Menu.MyGifts', type: "gifts", icon: 'menu-gifts', pathTo: '/my-gifts', active: true},
    {name: 'Menu.Wishlist', type: "wishlist", icon: 'menu-wishlist', pathTo: '/wishlist', active: true},
    {name: 'Menu.Support', type: "support", icon: 'menu-support', pathTo: '/support', active: false},
]

export function useMetaData() {
    const { 
        cities: allCities, 
        tagsData: allTagsList,
        categories: allCategoriesList 
    } = useSelector(state => state.iniData)
    const partnersCompany = useSelector(state => state.user.company)
    const { tr } = useTranslate()
    const navigate = useNavigate()

    const getLangsData = () => {
        return langsData
    }

    const handleCreatePromoBtn = () => {
        if (partnersCompany.description === '' || partnersCompany.name === '') {
            navigate(PL_APP_ROUTES.PARTNER.CREATE_PARTNER, {replace: false})
        } else {
            navigate(PL_APP_ROUTES.PARTNER.CREATE_PROMO, {replace: false})
        }
    }
    
    const getMenuData = () => {
        return menuItems
    }

    const getCityObj = (city_id) => {
        if (city_id !== null) {
            return allCities.filter(city => city.id === city_id)[0]
        }
    }

    const getCityName = (city_id = null) => {
        if (city_id !== null) {
            return allCities.filter(city => city.id === city_id)[0].name
        }
    }

    const getLocationFromAddress = (addressObj) => {
        const cityName = allCities.filter(city => city.id === addressObj.city_id)[0].name
        return tr(cityName) + '[%address%]' + addressObj.adress
    }

    const getLocationFromDeliveryItem = (deliveryObj) => {
        const cityName = allCities.filter(city => city.id === deliveryObj.list[0])[0].name
        return tr(cityName) + '[%delivery%]' + deliveryObj.description
    }

    const getPartnerCompany = () => {
        return partnersCompany
    }

    const getTagNameById = (id) => {
        return allTagsList.filter(tag => tag.id === id)[0].name
    }

    const getCategoryNameById = (id) => {
        return allCategoriesList.filter(cat => cat.id === id)[0].name
    }

    const getCitiesString = (cityIdArr) => {
        let cityString = ''
        for (let i = 0; i < cityIdArr.length; i++) {
            const cityId = cityIdArr[i];
            if (i !== 0) {
                cityString += ` • ${tr(getCityName(cityId))}`
            } else {
                cityString += tr(getCityName(cityId))
            }
        }
        return cityString
    }
    const getCitiesFromAddressesString = (addrObj) => {
        let cityString = ''
        let usedIds = []
        console.log(addrObj)
        for (let i = 0; i < addrObj.length; i++) {
            const cityId = addrObj[i].city_id;
            if (!usedIds.includes(cityId)) {
                if (i !== 0) {
                    cityString += ` • ${tr(getCityName(cityId))}`
                } else {
                    cityString += tr(getCityName(cityId))
                }
                usedIds = [...usedIds, cityId]
            }
        }
        return cityString
    }

    return {
        getLangsData,
        getMenuData,
        getCityObj,
        getCityName,
        getLocationFromAddress,
        getLocationFromDeliveryItem,
        getTagNameById,
        getCategoryNameById,
        handleCreatePromoBtn,
        getPartnerCompany,
        getCitiesString,
        getCitiesFromAddressesString
    }
}