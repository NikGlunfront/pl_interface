import React, { useEffect } from "react"
import { useMetaData } from "../../hooks/useMetaData";
import { useTranslate } from "../../hooks/useTranslate";

const AdressItem = ({
    adress,
    mapLink,
    city_id,
    controlsActive = false
}) => {

    const { tr } = useTranslate()
    const { getCityObj } = useMetaData()
    const currentCity = getCityObj(city_id)

    if (!city_id) {
        return
    }
    return (
        <div className={"adress-item " + (controlsActive ? "adress-item_with_controls" : '')}>
            <div className="adress-item__adress">
                {tr(currentCity.name)}, {adress}-
            </div>
            <div className="adress-item__map"> 
                {controlsActive &&
                    <div className="adress-item__controls"></div>
                }
                <iframe 
                    src={mapLink} 
                    width="auto" 
                    height="auto"
                    allowFullScreen="" 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade">
                </iframe>
            </div>
        </div>
    )
};

export default AdressItem;
