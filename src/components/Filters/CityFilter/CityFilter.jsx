import React, { useState } from "react"
import SmartSelect from "../../UI/SmartSelect/SmartSelect";
import CityFilterWindow from "./CityFilterWindow";
import citySvg from '../../../assets/img/icons/location.svg'
import citySvgDarkTheme from '../../../assets/img/icons/location_white.svg'
import { useDispatch, useSelector } from "react-redux";
import { setActiveCity } from "../../../store/slices/filters/filtersSlice";
import { setIsContentHidden } from "../../../store/slices/pageSlice/pageSlice";
import { useTranslate } from "../../../hooks/useTranslate";

const CityFilter = ({
    isDarkTheme
}) => {

    const iniData = useSelector(state => state.iniData)
    const dispatch = useDispatch()
    const { tr } = useTranslate()

    const [listVisible, setListVisible] = useState(false)
    const [filterCount, setFilterCount] = useState(0)
    const [filterCity, setFilterCity] = useState(0)

    const openFilterList = () => {
        setListVisible(true)
        dispatch(setIsContentHidden(true))
    }
    const updateFilterData = (data = 0) => {
        setListVisible(false)
        dispatch(setIsContentHidden(false))
        if (data !== 0) {
            setFilterCity(data)
            const cityName = iniData.cities.filter(city => city.id == data)[0].name
            dispatch(setActiveCity({id: data, name: cityName}))
        }
    }

    return (
        <div className="pl-filter-container">
            <SmartSelect
                icon={isDarkTheme ? citySvgDarkTheme : citySvg}
                openFilterList={openFilterList}
                filterCount={filterCount}
                >
                <span
                    className={filterCity !== 0 ? 'pl-app-medium-text' : ''}
                >
                    {filterCity !== 0 ? tr(iniData.cities.filter(city => city.id === filterCity)[0].name) : tr('City')}
                </span>
            </SmartSelect>
            <CityFilterWindow 
                visible={listVisible}
                updateFilterData={updateFilterData}
                cityData={iniData.cities}
                cityDataNums={iniData.citiesNums}
            />
        </div>
    )
};

export default CityFilter;
