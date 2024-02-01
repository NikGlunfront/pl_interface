import React from "react"
import FilterWindow from "../UI/SmartSelect/FilterWindow";
import ReturnBtn from "../UI/ReturnBtn/ReturnBtn";
import { NavLink, useNavigate } from "react-router-dom";
import giftSvg from '../../assets/img/icons/gift.svg';
import giftSvgDarkTheme from '../../assets/img/icons/gift_white.svg';
import WishListIcon from "./WishListIcon";
import LcIcon from "./LcIcon";
import SupportIcon from "./SupportIcon";
import GiftsIcon from "./GiftsIcon";
import SmartButton from "../UI/SmartButton/SmartButton";
import { PL_APP_ROUTES } from "../../vars/routes";
import { useSelector } from "react-redux";

const menuItems = [
    {name: 'Кабинет партнера', icon: <LcIcon />, pathTo: '/partner', active: false},
    {name: 'Мои подарки', icon: <GiftsIcon />, pathTo: '/my-gifts', active: true},
    {name: 'Избранное', icon: <WishListIcon />, pathTo: '/wishlist', active: true},
    {name: 'Поддержка', icon: <SupportIcon />, pathTo: '/support', active: false},
]

const BurgerMenu = ({
    visible,
    closeWindow
}) => {
    const navigate = useNavigate()
    const { darkTheme: isDarkTheme } = useSelector(state => state.pageMeta)

    const closeList = () => {
        closeWindow()
    }

    const handleGoToCreate = () => {
        navigate(PL_APP_ROUTES.PARTNER.CREATE_PROMO, {replace: false})
    }

    return (
        <FilterWindow visible={visible}>
            <div className="pl-return-toppanel">
                <ReturnBtn onClickFunc={closeList} className={"pl-return-toppanel__return"} />
                <div className="pl-return-toppanel__title">Меню</div>
            </div>
            <div className="filters-pl-select__content">
                <div className={"pl-burger-list "}>
                    {menuItems.map(item => (
                        <NavLink 
                            to={item.pathTo} 
                            className={"pl-burger-list__item " + (item.active ? "" : "pl-burger-list__item_disabled")} 
                            key={item.name}
                        >
                            {item.icon}
                            <span>{item.name}</span>
                        </NavLink>
                    ))}
                </div>
            </div>
            <div className="filters-pl-select__bottom burger-menu-btns">
                <SmartButton color="red">
                    Получить франшизу
                </SmartButton>
                <SmartButton
                    onClick={handleGoToCreate}
                    icon={isDarkTheme === true ? giftSvgDarkTheme : giftSvg}
                >
                    Новый подарок
                </SmartButton>
            </div>
        </FilterWindow>
    )
};

export default BurgerMenu;
