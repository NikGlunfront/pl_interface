import React, { useEffect, useState } from "react"
import { setIsContentHidden } from "../../../store/slices/pageSlice/pageSlice";
import { useDispatch, useSelector } from "react-redux";
import { useTranslate } from "../../../hooks/useTranslate";
import DeliveryWindow from "./DeliveryWindow";
import { useMetaData } from "../../../hooks/useMetaData";

const DeliveryFilter = ({
    callbackDelivery
}) => {
    const dispatch = useDispatch()
    const { tr } = useTranslate()
    const { getCitiesString } = useMetaData()
    const [listVisible, setListVisible] = useState(false)
    const {cities} = useSelector(state => state.iniData)
    const [deliveryData, setDeliveryData] = useState({list: [], description: ''})

    useEffect(() => {console.log(deliveryData)}, [deliveryData])

    const openFilterList = () => {
        setListVisible(true)
        dispatch(setIsContentHidden(true))
    }

    const handleCallbackDelivery = (data) => {
        setDeliveryData(data)
        callbackDelivery(data)
    }

    const closeList = () => {
        setListVisible(false)
        dispatch(setIsContentHidden(false))
    }

    return (
        <div className="firststep-create-promo__city">
            <div className={"firststep-create-promo__filter _delivery_only" + (deliveryData.list.length > 0 ? " _picked" : '')} onClick={openFilterList}>
            <svg width="18" height="15" viewBox="0 0 18 15" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M11.1053 10.2632H1.84211C1.37726 10.2632 1 9.88589 1 9.42105V2.68421C1 1.75368 1.75368 1 2.68421 1H9.42105C10.3516 1 11.1053 1.75368 11.1053 2.68421V10.2632Z" stroke="#E10001" stroke-linecap="round" stroke-linejoin="round"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M17.0002 10.2629H11.1055V4.36816H14.4739L17.0002 6.89448V10.2629Z" stroke="#E10001" stroke-linecap="round" stroke-linejoin="round"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M15.5741 11.6884C15.5741 12.7621 14.7045 13.6318 13.6308 13.6318C12.5571 13.6318 11.6875 12.7621 11.6875 11.6884C11.6875 10.6148 12.5571 9.74512 13.6308 9.74512C14.7045 9.74512 15.5741 10.6148 15.5741 11.6884Z" fill="white" stroke="#E10001" stroke-linecap="round" stroke-linejoin="round"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M5.85734 11.6884C5.85734 12.7621 4.98771 13.6318 3.91402 13.6318C2.84034 13.6318 1.9707 12.7621 1.9707 11.6884C1.9707 10.6148 2.84034 9.74512 3.91402 9.74512C4.98771 9.74512 5.85734 10.6148 5.85734 11.6884Z" fill="white" stroke="#E10001" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
                <div>{deliveryData.list.length > 0 ? getCitiesString(deliveryData.list) : tr('Delivery')}</div>
                {deliveryData.list.length > 0 && (cities.length - deliveryData.list.length !== 0) &&
                    <div className="promo-create-filter-more">еще {cities.length - deliveryData.list.length}</div>
                }
            </div>
            <DeliveryWindow 
                closeList={closeList}
                listVisible={listVisible}
                updateDeliveryList={handleCallbackDelivery}
            />
        </div>
    )
};

export default DeliveryFilter;
