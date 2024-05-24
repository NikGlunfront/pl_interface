import React, { useState } from "react"
import { useDispatch } from "react-redux";
import { setHeaderSearchList } from "../../store/slices/pageSlice/pageSlice";

const HeaderSearchBtn = ({
    searchToggler,
    isActiveSearch
}) => {
    const [isActive, setIsActive] = useState(false)

    const handleSearchClick = () => {
        searchToggler(!isActiveSearch)
    }

    return (
        <div className="pl-app-header__globalsearch" onClick={handleSearchClick}>
            
        </div>
    )
};

export default HeaderSearchBtn;
