import React, { useEffect } from "react"
import HeaderFilterBtn from "./HeaderFilterBtn";
import { Link, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import HeaderSearchBtn from "./HeaderSearchBtn";
import { setPageTitle, setSearchAvailable } from "../../store/slices/pageSlice/pageSlice";

const Header = ({
    type,
    returnFunction = null
}) => {
    const location = useLocation()
    const pageMeta = useSelector(state => state.pageMeta)
    const activeCity = useSelector(state => state.filters.activeCity)
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

    const createReturnButton = () => {
        if (returnFunction !== null) {
            return (
                <div onClick={returnFunction} className="pl-app-header__returnbtn"></div>
            )
        } else {
            return (
                <Link to={'/promos'} className="pl-app-header__returnbtn" />
            )
        }
    }

    return (
        <div className={className}>
            {type === 'filter'
                ? <HeaderFilterBtn />
                : createReturnButton()
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
