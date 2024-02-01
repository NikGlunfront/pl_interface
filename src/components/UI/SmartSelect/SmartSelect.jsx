import React from "react"
import expandRightSvg from '../../../assets/img/icons/expand_right.svg'
import expandRightSvgDarkTheme from '../../../assets/img/icons/expand_right_white.svg'
import { useSelector } from "react-redux";

const SmartSelect = ({
    children,
    disabled = false,
    data,
    icon,
    filterCount,
    openFilterList
}) => {
    const { darkTheme: isDarkTheme } = useSelector(state => state.pageMeta)
    let className = 'pl-select '
    if (disabled) {
        className += 'pl-select_disabled '
    }

    return (
        <div
            className={className}
            onClick={openFilterList}
        >
            {children}
            {icon && <img src={icon} />}
            <div>
                {filterCount !== 0 ? filterCount : ''}
            </div>
            <img src={isDarkTheme ? expandRightSvgDarkTheme : expandRightSvg} className="pl-select__expand_img" alt="" />

        </div>
    )
};

export default SmartSelect;
