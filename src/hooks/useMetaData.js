import { useSelector } from "react-redux"

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
    const { cities: allCities } = useSelector(state => state.iniData)
    const partnersCompany = useSelector(state => state.user.company)

    const getLangsData = () => {
        return langsData
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

    const getPartnerCompany = () => {
        return partnersCompany
    }

    return {
        getLangsData,
        getMenuData,
        getCityObj,
        getCityName,
        getPartnerCompany
    }
}