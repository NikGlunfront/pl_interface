import React, { useEffect, useState } from "react"
import HeaderFilterBtn from "./HeaderFilterBtn";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import HeaderSearchBtn from "./HeaderSearchBtn";
import { setPageTitle, setSearchAvailable } from "../../store/slices/pageSlice/pageSlice";
import { setCreatePromoStepPosition } from "../../store/slices/createPromo/createPromoSlice";

const Header = ({
    type
}) => {
    const location = useLocation()
    const navigate = useNavigate()
    const pageMeta = useSelector(state => state.pageMeta)
    const createPromoStep = useSelector(state => state.createPromo.lastStep)
    const { activeCity } = useSelector(state => state.filters)
    const { brandImg, brandName } = pageMeta.chatMeta
    const [returnPath, setReturnPath] = useState('-1')
    const [isChatPage, setIsChatPage] = useState(false)

    const dispatch = useDispatch()
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
    if (pageMeta.darkTheme) {
        className += 'pl-app-header_darktheme '
    }

    useEffect(() => {
        setIsChatPage(false)
        if (location.pathname.includes('chat/')) {
            setReturnPath(-1)
            setIsChatPage(true)
            return
        }
        if (location.pathname.includes('promo/')) {
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
                dispatch(setPageTitle('Избранное'))
                dispatch(setSearchAvailable(true))
                break;
                
            case '/my-gifts':
                dispatch(setPageTitle('Мои подарки'))
                dispatch(setSearchAvailable(true))
            break;
                
            case '/create-promo':
                dispatch(setPageTitle('Новый подарок'))
                dispatch(setSearchAvailable(false))
            break;
                
            case '/create-partner':
                dispatch(setPageTitle('Профиль'))
                setReturnPath(-1)
                dispatch(setSearchAvailable(true))
            break;
        
            default:
                break;
        }
    }, [location.pathname])

    const returnFunction = () => {
        if (location.pathname === '/create-promo') {
            if (createPromoStep > 1) {
                dispatch(setCreatePromoStepPosition(createPromoStep - 1))
            } else {
                navigate(-1)
            }
        } else {
            navigate(returnPath)
        }
    }

    return (
        <div className={className}>
            {type === 'filter'
                ? <HeaderFilterBtn />
                : <div onClick={returnFunction} className="pl-app-header__returnbtn"></div>
            }
            <div className="pl-app-header__title">{pageMeta.title}</div>
            {pageMeta.searchAvailable
                ? <HeaderSearchBtn />
                : ""
            }             
            {isChatPage 
                ? <div className="pl-app-header__brand"><img src={brandImg} alt={brandName} /></div>
                : ""
            }             
        </div> 
    )
};

export default Header;
 