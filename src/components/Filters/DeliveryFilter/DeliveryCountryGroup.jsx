import React, { useEffect, useState } from "react"
import { useIcons } from "../../../hooks/useIcons";
import { useTranslate } from "../../../hooks/useTranslate";
import Checkbox from "../../UI/Input/Checkbox";
import { useSelector } from "react-redux";

const DeliveryCountryGroup = ({
    countryObj,
    searchQ,
    callbackDelivery,
    activeCities
}) => {
    const [isOpened, setIsOpened] = useState(true)
    const { tr } = useTranslate()
    const {cities} = useSelector(state => state.iniData)
    const { getIcon } = useIcons()
    const [filteredCities, setFilteredCities] = useState([])

    const toggleVisibility = () => {
        setIsOpened(!isOpened)
    }

    useEffect(() => {
        if (searchQ.length > 0) {
            setFilteredCities(cities.filter(city => city.country_id === countryObj.id && city.name.toLowerCase().includes(searchQ.toLowerCase())))
        } else {
            setFilteredCities(cities.filter(city => city.country_id === countryObj.id))
        }
    }, [searchQ])

    if (filteredCities.length === 0) {
        return
    }

    return (
        <div className={"adress-group _delivery" + (isOpened ? " adress-group_opened" : "")}>
            <div onClick={toggleVisibility} className="adress-group__title">
                <div className="adress-group__name">
                    <img src={getIcon('lang-ru')} alt="" />
                    {tr(countryObj.name)}
                </div>
            </div>
            <div className="adress-group__content">
                {filteredCities.map(city => (
                    <Checkbox 
                        name={tr(city.name)}
                        id={city.id}
                        isChecked={activeCities?.indexOf(city.id) !== -1 ? true : false}
                        toggleFunc={callbackDelivery}
                        key={city.id}
                    />
                ))}
            </div>
        </div>
    )
};

export default DeliveryCountryGroup;
