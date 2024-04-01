import React, { useEffect, useRef, useState } from "react"
import { useMetaData } from "../../hooks/useMetaData";
import { useTranslate } from "../../hooks/useTranslate";
import ActionsClicker from "../UI/ActionsClicker/ActionsClicker";
import { useIcons } from "../../hooks/useIcons";
import { useDispatch } from "react-redux";
import { setAdressToDelete, setAdressToEdit, setPageFreezedParam, showActionsList } from "../../store/slices/pageSlice/pageSlice";
import { useScroll } from "../../hooks/useScroll";
import { useTelegram } from "../../hooks/useTelegram";

const AdressItem = ({
    adress = null,
    controlsActive = false,
    creatorRef = null
}) => {

    const { tr } = useTranslate()
    const { sendAlert } = useTelegram()
    const { getIcon } = useIcons()
    const { getCityObj } = useMetaData()
    const { scrollToRef } = useScroll()
    const [currentCity, setCurrentCity] = useState(null)
    const dispatch = useDispatch()
    const itemRef = useRef(null)
    
    useEffect(() => {
        setCurrentCity(getCityObj(adress?.city_id))
    }, [adress])
    
    const executeEdit = () => {
        dispatch(setAdressToEdit(adress))
        dispatch(setPageFreezedParam(true))
        dispatch(showActionsList(''))
        console.log(creatorRef)
        if (creatorRef !== null) {
            scrollToRef(creatorRef)
        }
    }
    
    const executeDelete = () => {
        dispatch(showActionsList(''))
        dispatch(setAdressToDelete(adress))
        sendAlert('Adress was successfully deleted')
    }
    
    if (adress === null) {
        return;
    }
    return (
        <>  
            <div className={"adress-item " + (controlsActive ? " adress-item_with_controls" : '')} ref={itemRef}>
                <div className="adress-item__adress">
                    {tr(currentCity?.name)}, {adress.adress}
                </div>
                <div className="adress-item__map">
                    {controlsActive &&
                        <ActionsClicker
                            uid={adress.city_id + "_" + adress.id + '_adress'} 
                            className={'adress-item__controls'}
                        >
                            <div onClick={executeDelete}>
                                {tr('ActionsList.Delete')}
                                <img src={getIcon('delete')} alt="" />
                            </div>
                            <div onClick={executeEdit}>
                                {tr('ActionsList.Edit')}
                                <img src={getIcon('edit')} alt="" />
                            </div>
                            {/* <div>
                                {tr('ActionsList.Replace')}
                                <img src={getIcon('drag')} alt="" />
                            </div> */}
                        </ActionsClicker>
                    }
                    <iframe 
                        title="map_"
                        src={adress.map_url} 
                        width="auto" 
                        height="auto"
                        allowFullScreen="" 
                        loading="lazy" 
                        referrerPolicy="no-referrer-when-downgrade">
                    </iframe>
                </div>
            </div>
        </>
    )
};

export default AdressItem;
