import React, { useEffect, useState } from "react"
import { setIsContentHidden } from "../../../store/slices/pageSlice/pageSlice";
import { useDispatch, useSelector } from "react-redux";
import { useTranslate } from "../../../hooks/useTranslate";
import DeliveryWindow from "./DeliveryWindow";

const DeliveryFilter = ({
    callbackDelivery
}) => {
    const dispatch = useDispatch()
    const { tr } = useTranslate()
    const [listVisible, setListVisible] = useState(false)
    const [deliveryData, setDeliveryData] = useState({list: [], description: ''})

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
            <div className="firststep-create-promo__filter _delivery_only" onClick={openFilterList}>
                <span>{deliveryData.description.length > 0 && deliveryData.list.length > 0 ? `(${deliveryData.list.length}) ${deliveryData.description}` : tr('Delivery')}</span>
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
