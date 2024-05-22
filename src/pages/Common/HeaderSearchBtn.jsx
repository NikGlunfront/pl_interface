import React, { useState } from "react"
import { useDispatch } from "react-redux";
import { setHeaderSearchList } from "../../store/slices/pageSlice/pageSlice";

const HeaderSearchBtn = ({
    searchToggler
}) => {
    const [isActive, setIsActive] = useState(false)

    const handleSearchClick = () => {
        setIsActive(!isActive)
        searchToggler(!isActive)
    }

    return (
        <div className="pl-app-header__globalsearch" onClick={handleSearchClick}>
            
        </div>
    )
};

export default HeaderSearchBtn;
