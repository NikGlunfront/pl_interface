import React from "react"
import { useSelector } from "react-redux";

const FilterWindow = ({
    visible,
    children
}) => {
    const { darkTheme: isDarkTheme } = useSelector(state => state.pageMeta)
    let className = 'pl-select__filters filters-pl-select '
    if (visible) {
        className += 'filters-pl-select_showed '
    }
    if (isDarkTheme) {
        className += 'filters-pl-select_darktheme'
    }


    return (
        <div className={className}>
            {children}
        </div>
    )
};

export default FilterWindow;
