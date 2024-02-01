import React, { useState } from "react"
import SmartSelect from "../../UI/SmartSelect/SmartSelect";
import CategoryFilterWindow from "./CategoryFilterWindow";
import catFilterSvg from '../../../assets/img/icons/filter.svg'
import catFilterSvgDarkTheme from '../../../assets/img/icons/filter_white.svg'
import { useDispatch, useSelector } from "react-redux";
import { setIsContentHidden } from "../../../store/slices/pageSlice/pageSlice";

const CategoryFilter = ({
    isDarkTheme
}) => {
    const app_filters = useSelector(state => state.filters)
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
        <div className="pl-filter-container">
            <SmartSelect 
                icon={isDarkTheme ? catFilterSvgDarkTheme : catFilterSvg}
                openFilterList={openFilterList}
                disabled={app_filters.activeCity.id !== null ? false : true}
                filterCount={app_filters.categories?.length | 0}
            >
                <span
                    className={app_filters.categories?.length > 0 ? 'pl-app-medium-text' : ''}
                >Категории</span>
            </SmartSelect>
            <CategoryFilterWindow 
                visible={listVisible}
                closeWindow={closeWindow}
            />
        </div>
    )
};

export default CategoryFilter;
