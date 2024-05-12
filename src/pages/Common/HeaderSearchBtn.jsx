import React, { useState } from "react"

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
