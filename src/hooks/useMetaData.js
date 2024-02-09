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
    const getLangsData = () => {
        return langsData
    }
    
    const getMenuData = () => {
        return menuItems
    }

    return {
        getLangsData,
        getMenuData
    }
}