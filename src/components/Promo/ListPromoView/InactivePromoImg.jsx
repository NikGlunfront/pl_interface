import React, { useState } from "react"
import YesNo from "../../UI/Input/YesNo";
import { useTranslate } from "../../../hooks/useTranslate";

const InactivePromoImg = ({
    
}) => {
    const { tr } = useTranslate()
    const [notifications, setNotifications] = useState(false)

    const toggleFunc = () => {
        setNotifications(!notifications)
    }

    return (
        <div className="list-item-inactive">
            <span>{tr('Promo.PreviewImg.Paused')}</span>
            <div>
                <YesNo 
                   toggleFunc={toggleFunc}
                   isChecked={notifications}
                   name={tr('Promo.PreviewImg.RemindMe')} 
                />
                <span></span>
            </div>
        </div>
    )
};

export default InactivePromoImg;