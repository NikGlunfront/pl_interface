import React, { useEffect, useState } from "react"
import { setIsContentHidden } from "../../../store/slices/pageSlice/pageSlice";
import { useTranslate } from "../../../hooks/useTranslate";
import { useDispatch, useSelector } from "react-redux";
import CitySelectorWindow from "./CitySelectorWindow";
import { useMetaData } from "../../../hooks/useMetaData";

const CitySelector = ({
    callbackCity,
    withIcon = false,
    stateData = []
}) => {
    const { tr } = useTranslate()
    const dispatch = useDispatch()
    const { getCityName } = useMetaData()
    const {cities: allCitiesList} = useSelector(state => state.iniData)
    const [listVisible, setListVisible] = useState(false)
    const [listSelected, setListSelected] = useState([])

    useEffect(() => {
        if (stateData.length > 0) {
            setListSelected([...stateData])
        }
    }, [stateData])
    useEffect(() => {
        callbackCity(listSelected)
    }, [listSelected])

    const openFilterList = () => {
        setListVisible(true)
        dispatch(setIsContentHidden(true))
    }

    const handleCallbackSelector = (id) => {
        if (listSelected.indexOf(id) !== -1) {
            setListSelected(listSelected.filter(item => item !== id))
        } else {
            setListSelected([...listSelected, id])
        }
    }

    const closeList = () => {
        setListVisible(false)
        dispatch(setIsContentHidden(false))
    }

    return (
        <div className={"firststep-create-promo__city" + (withIcon ? " _with_icon_city" : "")}>
            <div className="firststep-create-promo__filter _tags" onClick={openFilterList}>
                <div className="selector-icon">
                    {listSelected.length === 0 
                        ? 
                        tr('Cities') 
                        : 
                        <>
                            ({listSelected.length})
                            {
                                listSelected.map((cityId, index) => (
                                    <span key={cityId}> {tr(getCityName(cityId))} {index === listSelected.length - 1 ? "" : ", "}</span>
                                ))
                            }
                        </>
                    }
                </div>
            </div>
            <CitySelectorWindow 
                closeList={closeList}
                listVisible={listVisible}
                updateList={handleCallbackSelector}
                cities={allCitiesList}
                activeCities={listSelected}
            />
        </div>
    )
};

export default CitySelector;
