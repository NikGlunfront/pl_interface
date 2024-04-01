import React from "react"
import { useSelector } from "react-redux";

const FilterWindow = ({
    visible,
    children,
    classNameSub = ""
}) => {
    const { darkTheme: isDarkTheme } = useSelector(state => state.pageMeta)
    let className = 'pl-select__filters filters-pl-select '
    if (visible) {
        className += 'filters-pl-select_showed '
    }
    if (isDarkTheme) {
        className += 'filters-pl-select_darktheme'
    }
    if (classNameSub !== '') {
        className += ` ${classNameSub}`
    }


    return (
        <div className={className}>
            {children}
        </div>
    )
};

export default FilterWindow;
