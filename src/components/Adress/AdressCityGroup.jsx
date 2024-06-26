import React, { useEffect, useState } from "react"
import CheckBoxAdress from "./CheckBoxAdress";
import { useTranslate } from "../../hooks/useTranslate";
import { useIcons } from "../../hooks/useIcons";
import { useMetaData } from "../../hooks/useMetaData";

const AdressCityGroup = ({
    city,
    adresses,
    toggleFunc,
    activeAdress,
    searchQ
}) => {
    const [opened, setIsOpened] = useState(true)
    const [adressByCity, setAdressByCity] = useState([])
    const { tr } = useTranslate()
    const { getIcon } = useIcons()
    const { getLocationFromAddress } = useMetaData()
     
    const toggleVisibility = () => {
        setIsOpened(!opened)
    }

    useEffect(() => {
        setAdressByCity(adresses.filter(adress => adress.city_id === city.id))
    }, [])

    useEffect(() => {
        let filteredBySearchAdresses
        if (searchQ.length > 0) {
            filteredBySearchAdresses = adresses.filter(item => getLocationFromAddress(item).toLowerCase().includes(searchQ.toLowerCase()) && item.city_id === city.id)
            setAdressByCity(filteredBySearchAdresses)
        } else {
            filteredBySearchAdresses = adresses.filter(adress => adress.city_id === city.id)
            setAdressByCity(filteredBySearchAdresses)
        }
    }, [searchQ])

    if (adresses.filter(adress => adress.city_id === city.id).length === 0) {
        return
    }

    return (
        <div className={"adress-group " + (opened ? "adress-group_opened " : "")}>
            <div onClick={toggleVisibility} className="adress-group__title">
                <div className="adress-group__name">
                    <img src={getIcon('lang-ru')} alt="" />
                    {tr(city.name)}
                </div>
            </div>
            <div className="adress-group__content">
                {adressByCity.length > 0 
                
                    ?
                    adressByCity.map(adress => (
                    <CheckBoxAdress 
                        key={adress.id}
                        isChecked={activeAdress.filter(item => item === adress.id).length > 0}
                        adress={adress}
                        toggleFunc={toggleFunc}
                    />
                    ))
                    : 
                    <div className="adress-group__noresult">{tr('Search.Result.NoAddresses')}</div>
                }
            </div>
        </div>
    )
};

export default AdressCityGroup;
