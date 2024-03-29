import React, { useEffect } from "react"
import { useMetaData } from "../../hooks/useMetaData";
import { useTranslate } from "../../hooks/useTranslate";
import ActionsClicker from "../UI/ActionsClicker/ActionsClicker";
import { useIcons } from "../../hooks/useIcons";

const AdressItem = ({
    adress,
    adress_id,
    mapLink,
    city_id,
    controlsActive = false
}) => {

    const { tr } = useTranslate()
    const { getIcon } = useIcons()
    const { getCityObj } = useMetaData()
    const currentCity = getCityObj(city_id)
    console.log(adress)
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
                    <ActionsClicker
                        uid={city_id + "_" + adress_id + '_adress'} 
                        className={'adress-item__controls'}
                    >
                        <div>
                            Удалить
                            <img src={getIcon('delete')} alt="" />
                        </div>
                        <div>
                            Изменить
                            <img src={getIcon('edit')} alt="" />
                        </div>
                        <div>
                            Переместить
                            <img src={getIcon('drag')} alt="" />
                        </div>
                    </ActionsClicker>
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
