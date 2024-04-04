import React from "react"
import FilterWindow from "../UI/SmartSelect/FilterWindow";
import ReturnBtn from "../UI/ReturnBtn/ReturnBtn";
import { NavLink, useNavigate } from "react-router-dom";
import giftSvg from '../../assets/img/icons/gift.svg';
import giftSvgDarkTheme from '../../assets/img/icons/gift_white.svg';
import SmartButton from "../UI/SmartButton/SmartButton";
import { PL_APP_ROUTES } from "../../vars/routes";
import { useSelector } from "react-redux";
import { useMetaData } from "../../hooks/useMetaData";
import LangItem from "./LangItem";
import { useTranslate } from "../../hooks/useTranslate";
import BurgerItemIcon from "./BurgerItemIcon";

const BurgerMenu = ({
    visible,
    closeWindow
}) => {
    const { tr } = useTranslate()
    const { getLangsData, getMenuData, handleCreatePromoBtn } = useMetaData()
    const langsData = getLangsData()
    const menuData = getMenuData()
    const { darkTheme: isDarkTheme } = useSelector(state => state.pageMeta)

    const closeList = () => {
        closeWindow()
    }

    return (
        <FilterWindow visible={visible}>
            <div className="pl-return-toppanel">
                <ReturnBtn onClickFunc={closeList} className={"pl-return-toppanel__return"} />
                <div className="pl-return-toppanel__title">{tr('Menu')}</div>
            </div>
            <div className="filters-pl-select__content">
                <div className={"pl-burger-list "}>
                    {menuData.map(item => (
                        <NavLink 
                            to={item.pathTo} 
                            className={"pl-burger-list__item " + (item.active ? "" : "pl-burger-list__item_disabled")} 
                            key={item.type}
                        >
                            <BurgerItemIcon  
                                icon={item.icon}
                                type={item.type}
                            />
                            <span>{tr(item.name)}</span>
                        </NavLink>
                    ))}
                </div>
                <div className="pl-burger-langs">
                    {langsData.map(lang => (
                        <LangItem 
                            key={lang.lang_code}
                            icon={lang.icon}
                            langCode={lang.lang_code}
                            text={lang.text}
                        />
                    ))}
                </div>
            </div>
            <div className="filters-pl-select__bottom burger-menu-btns">
                <SmartButton color="red">
                    {tr('Button.GetFranchise')}
                </SmartButton>
                <SmartButton
                    onClick={handleCreatePromoBtn}
                    icon={isDarkTheme === true ? giftSvgDarkTheme : giftSvg}
                >
                    {tr('Button.NewGift')}
                </SmartButton>
            </div>
        </FilterWindow>
    )
};

export default BurgerMenu;
