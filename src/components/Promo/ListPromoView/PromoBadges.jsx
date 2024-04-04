import React from "react"
import { useTranslate } from "../../../hooks/useTranslate";

const PromoBadges = ({
    gifts_amount_left,
    days_amount_left,
    inactive
}) => {
    const { tr } = useTranslate()

    const getStringDate = (dataObj) => {
        const day = dataObj.getDate().toString().padStart(2, "0");
        const month = (dataObj.getMonth() + 1).toString().padStart(2, "0");
        const year = dataObj.getFullYear().toString().slice(2); 
        return `${day}.${month}.${year}`
    }

    const translateTimeString = (timeString) => {
        return getStringDate(new Date(timeString))
    }

    return (
        <div className="badges-list-item">
            {gifts_amount_left >= 0 && inactive !== true 
                ? <div className="badges-list-item__gifts_left">{tr('Promo.PreviewImg.GiftsLeft')}: <span>{gifts_amount_left}</span></div>
                : ""
            }
            {days_amount_left && inactive !== true
                ?   <div className="badges-list-item__days_left">{translateTimeString(days_amount_left)}</div>
                :   ""
            }
        </div>
    )
};

export default PromoBadges;
