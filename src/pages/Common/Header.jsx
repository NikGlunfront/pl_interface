import React, { useEffect, useState } from "react"
import HeaderFilterBtn from "./HeaderFilterBtn";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import HeaderSearchBtn from "./HeaderSearchBtn";
import { setPageTitle, setSearchAvailable } from "../../store/slices/pageSlice/pageSlice";

const Header = ({
    type
}) => {
    const location = useLocation()
    const navigate = useNavigate()
    const pageMeta = useSelector(state => state.pageMeta)
    const { activeCity } = useSelector(state => state.filters)
    const { BrandImg } = pageMeta.chatMeta
    const [returnPath, setReturnPath] = useState('-1')

    const dispatch = useDispatch()
    let className = 'pl-app-header '
    if (type !== "filter") {
        className += 'pl-app-header_casual '
    }
    if (pageMeta.searchAvailable) {
        className += 'pl-app-header_searchav '
    }
    if (pageMeta.darkTheme) {
        className += 'pl-app-header_darktheme '
    }

    useEffect(() => {
        if (location.pathname.includes('chat/')) {
            setReturnPath('-1')
            return
        }
        if (location.pathname.includes('promo/')) {
            setReturnPath('-1')
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
                dispatch(setPageTitle('Создать промо'))
                dispatch(setSearchAvailable(true))
            break;
        
            default:
                break;
        }
    }, [location.pathname])

    const returnFunction = () => {
        navigate(-1)
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
        </div> 
    )
};

export default Header;
