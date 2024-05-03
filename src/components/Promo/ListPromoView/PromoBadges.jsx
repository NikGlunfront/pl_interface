import React, { useEffect, useState } from "react"
import { useTranslate } from "../../../hooks/useTranslate";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

const PromoBadges = ({
    gifts_amount_left,
    days_amount_left,
    inactive,
    recieved = false,
    deleted = false
}) => {
    const { tr } = useTranslate()
    const location = useLocation()
    const { activeMyGiftsTag } = useSelector(state => state.filters)
    const [isConfirmedGifts, setIsConfirmedGifts] = useState(false)

    useEffect(() => {
        if (activeMyGiftsTag === 'confirmed' && location.pathname.includes('my-gifts') ) {
            setIsConfirmedGifts(true)
        } else {
            setIsConfirmedGifts(false)
        }
    }, [])

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
            {gifts_amount_left >= 0 && inactive !== true && !isConfirmedGifts
                ? <div className="badges-list-item__gifts_left">{tr('Promo.PreviewImg.GiftsLeft')}: <span>{gifts_amount_left}</span></div>
                : ""
            }
            {days_amount_left && inactive !== true && !isConfirmedGifts
                ?   <div className="badges-list-item__days_left">{translateTimeString(days_amount_left)}</div>
                :   ""
            }
            {recieved && !deleted && isConfirmedGifts
                ?   <div className="badges-list-item__recieved">{tr('Promo.PreviewImg.Recieved')}<span><svg width="9" height="7" viewBox="0 0 9 7" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3.5 6L3.14645 6.35355L3.54146 6.74857L3.89043 6.31235L3.5 6ZM7.89043 1.31235L8.20278 0.921913L7.42191 0.297218L7.10957 0.687652L7.89043 1.31235ZM0.646447 3.85355L3.14645 6.35355L3.85355 5.64645L1.35355 3.14645L0.646447 3.85355ZM3.89043 6.31235L7.89043 1.31235L7.10957 0.687652L3.10957 5.68765L3.89043 6.31235Z" fill="black"/></svg></span></div>
                : <></>
            }
            {deleted && !recieved && isConfirmedGifts
                ?   <div className="badges-list-item__deleted">{tr('Promo.PreviewImg.Deleted')}<span><svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7 1.00007L1 7M7 6.99993L1 1" stroke="white" stroke-linecap="round" stroke-linejoin="round"/></svg></span></div>
                : <></>
            }
        </div>
    )
};

export default PromoBadges;
