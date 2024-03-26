import React, { useEffect, useState } from "react"
import CheckBoxAdress from "./CheckBoxAdress";
import { useTranslate } from "../../hooks/useTranslate";

const AdressCityGroup = ({
    city,
    adresses,
    toggleFunc,
    activeAdress
}) => {
    const [opened, setIsOpened] = useState(true)
    const [adressByCity, setAdressByCity] = useState([])
    const { tr } = useTranslate()
    
    const toggleVisibility = () => {
        setIsOpened(!opened)
    }

    useEffect(() => {
        setAdressByCity(adresses.filter(adress => adress.city_id === city.id))
    }, [])

    if (adressByCity.length === 0) {
        return
    }

    return (
        <div className={"adress-group " + (opened ? "adress-group_opened " : "")}>
            <div onClick={toggleVisibility} className="adress-group__title">
                <div className="adress-group__name">
                    {tr(city.name)}
                </div>
            </div>
            <div className="adress-group__content">
                {adressByCity.map(adress => (
                    <CheckBoxAdress 
                        key={adress.id}
                        isChecked={activeAdress.filter(item => item === adress.id).length > 0}
                        adress={adress}
                        toggleFunc={toggleFunc}
                    />
                ))}
            </div>
        </div>
    )
};

export default AdressCityGroup;
