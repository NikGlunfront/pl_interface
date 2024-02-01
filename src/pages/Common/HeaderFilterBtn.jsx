import React, { useState } from "react"
import { setIsContentHidden } from "../../store/slices/pageSlice/pageSlice";
import { useDispatch } from "react-redux";
import BurgerMenu from "../../components/BurgerMenu/BurgerMenu";

const HeaderFilterBtn = ({
    
}) => {
    const [listVisible, setListVisible] = useState(false)
    const dispatch = useDispatch()

    const openFilterList = () => {
        setListVisible(true)
        dispatch(setIsContentHidden(true))
    }
    
    
    const closeWindow = () => {
        setListVisible(false)
        dispatch(setIsContentHidden(false))
    }

    return (
        <>
        <div className="pl-app-header__filter" onClick={openFilterList}>
        </div>
        <BurgerMenu 
            visible={listVisible}
            closeWindow={closeWindow}
        />
        </>
    )
};

export default HeaderFilterBtn;
