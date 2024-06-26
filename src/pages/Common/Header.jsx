import React, { useEffect, useState } from "react"
import HeaderFilterBtn from "./HeaderFilterBtn";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import HeaderSearchBtn from "./HeaderSearchBtn";
import { setHeaderSearchList, setIsContentHidden, setPageTitle, setSearchAvailable } from "../../store/slices/pageSlice/pageSlice";
import { setCreatePromoStepPosition } from "../../store/slices/createPromo/createPromoSlice";
import { useTranslate } from "../../hooks/useTranslate";
import { setActiveCity } from "../../store/slices/filters/filtersSlice";
import CityFilterWindow from "../../components/Filters/CityFilter/CityFilterWindow";
import { useCategoryChanger } from "../../hooks/useCategoryChanger";
import { PL_APP_ROUTES } from "../../vars/routes";

const Header = ({
    type,
    isActiveSearch,
    searchToggler = () => {}
}) => {
    const location = useLocation()
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const pageMeta = useSelector(state => state.pageMeta)
    const iniData = useSelector(state => state.iniData)
    const accountData = useSelector(state => state.account)
    const {setAllCategoriesActive} = useCategoryChanger()
    const { tr } = useTranslate()
    const createPromoStep = useSelector(state => state.createPromo.lastStep)
    const { activeCity, cityId } = useSelector(state => state.filters)
    const { brandImg, brandName } = pageMeta.chatMeta
    const [returnPath, setReturnPath] = useState('-1')
    const [isChatPage, setIsChatPage] = useState(false)
    const [isPromoPage, setIsPromoPage] = useState(false)
    const [isAccountPage, setIsAccountPage] = useState(false)

    const [listVisible, setListVisible] = useState(false)

    const openFilterList = (e) => {
        e.stopPropagation()
        setListVisible(true)
        dispatch(setHeaderSearchList(true))
        // dispatch(setIsContentHidden(true))
    }
    const updateFilterData = (data = 0) => {
        setListVisible(false)
        dispatch(setHeaderSearchList(false))
        dispatch(setIsContentHidden(false))
        if (data !== 0) {
            const cityName = iniData.cities.filter(city => city.id == data)[0].name
            dispatch(setActiveCity({id: data, name: cityName}))
            setAllCategoriesActive()
            
        }
    }

    useEffect(() => {
        dispatch(setPageTitle(activeCity.name))
    }, [listVisible])

    useEffect(() => {console.log(listVisible)}, [listVisible])

    let className = 'pl-app-header '
    if (type !== "filter") {
        className += 'pl-app-header_casual '
    }
    if (pageMeta.searchAvailable) {
        className += 'pl-app-header_searchav '
    }
    if (isChatPage) {
        className += 'pl-app-header_branded '
    }
    if (isPromoPage) {
        className += 'pl-app-header_promopage '
    }
    if (pageMeta.darkTheme) {
        className += 'pl-app-header_darktheme '
    }

    useEffect(() => {
        setIsChatPage(false)
        setIsPromoPage(false)
        setIsAccountPage(false)
        if (location.pathname.includes('chat/')) {
            setReturnPath(-1)
            setIsChatPage(true)
            return
        }
        if (location.pathname.includes('promos/')) {
            setReturnPath(-1)
            setIsPromoPage(true)
            return
        }
        if (location.pathname.includes('partners/')) {
            setReturnPath(-1)
            return
        }
        if (location.pathname.includes('account')) {
            setIsAccountPage(true)
            dispatch(setPageTitle(accountData.balance))
            setReturnPath(-1)
            return
        }
        setReturnPath('/promos')

        switch (location.pathname) {
            case '/promos':
                dispatch(setPageTitle(activeCity.name))
                dispatch(setSearchAvailable(true))
                break;
            case '/wishlist':
                dispatch(setPageTitle('Page.Title.Wishlist'))
                dispatch(setSearchAvailable(false))
                break;
                
            case '/my-gifts':
                dispatch(setPageTitle('Page.Title.MyGifts'))
                dispatch(setSearchAvailable(false))
            break;
                
            case '/create-promo':
                dispatch(setPageTitle('Page.Title.NewPromo'))
                dispatch(setSearchAvailable(false))
            break;
                
            case '/create-partner':
                dispatch(setPageTitle('Page.Title.NewPromo'))
                setReturnPath(-1)
                dispatch(setSearchAvailable(true))
            break;
            default:
                break;
        }
    }, [location.pathname])

    const returnFunction = () => {
        if (location.pathname === '/create-promo') {
            if (activeCity.id !== null) {
                navigate(returnPath)
            } else {
                navigate("/")
            }
            // if (createPromoStep > 1) {
            //     dispatch(setCreatePromoStepPosition(createPromoStep - 1))
            // } else {
            //     navigate(-1)
            // }
        } else {
            navigate(returnPath)
        }
    }

    return (
        <div className={className + (pageMeta.isHeaderSearchActive && ' overheader ') + (pageMeta.isContentHidden && " _hidden_content")}>
            {type === 'filter'
                ? <HeaderFilterBtn />
                : <div onClick={returnFunction} className="pl-app-header__returnbtn"></div>
            }
            {location.pathname.includes('promos') && pageMeta.title.includes('City')
                ?
                <>
                <div className={"pl-app-header__title"} onClick={e => openFilterList(e)}>
                    {tr(pageMeta.title)}
                </div>
                <CityFilterWindow 
                    visible={listVisible}
                    updateFilterData={updateFilterData}
                    cityData={iniData.cities}
                    cityDataNums={iniData.citiesNums}
                />
                </>
                :
                <div className={"pl-app-header__title" + (location.pathname.includes('account') ? " _account" : "")}>{tr(pageMeta.title)}</div>
            }
            {pageMeta.searchAvailable
                ? <HeaderSearchBtn searchToggler={searchToggler} isActiveSearch={isActiveSearch} />
                : ""
            }             
            {isChatPage 
                ? <div className="pl-app-header__brand"><img src={brandImg} alt={brandName} /></div>
                : ""
            }             
            {isPromoPage 
                ? <div className="pl-app-header__share"></div>
                : ""
            }
            {isAccountPage
                ?   <div className="pl-app-header__cash">Пополнить</div>
                :   ""
            }             
        </div> 
    )
};

export default Header;
 