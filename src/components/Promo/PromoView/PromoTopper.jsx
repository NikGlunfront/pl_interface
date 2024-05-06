import React, { useEffect, useState } from "react"
import YesNo from "../../UI/Input/YesNo";
import PromoStats from "../ListPromoView/PromoStats";
import PromoPreview from "../PromoPreview";
import { useTranslate } from "../../../hooks/useTranslate";
import { useMetaData } from "../../../hooks/useMetaData";

const PromoTopper = ({
    promoData = null,
    promoName,
    promoImage,
    promoDescription,
    promoDataStats,
    companyImage,
    companyName,
    amountLeft,
    inactive = false,
}) => {
    let className = 'pl-promo '
    const [notifications, setNotifications] = useState(false)
    const [locationString, setLocationString] = useState('')
    const [isDeliveryLocation, setIsDeliveryLocation] = useState(false)
    const { getLocationFromAddress, getLocationFromDeliveryItem } = useMetaData()
    const { tr } = useTranslate()

    useEffect(() => {
        if (promoData !== null) {
            if (promoData.adresses.length === 0) {
                setLocationString(getLocationFromDeliveryItem(promoData.delivery))
                setIsDeliveryLocation(true)
            } else {
                setLocationString(getLocationFromAddress(promoData.adresses[0]))
                setIsDeliveryLocation(false)
            }
        }
    }, [promoData])

    const toggleFunc = () => {
        setNotifications(!notifications)
    }
    useEffect(() => {
        console.log(locationString)
    }, [])

    if (promoData === null) {
        return
    }


    return (
        <div className={className}>
            <PromoPreview 
                amountLeft={amountLeft}
                companyImage={companyImage}
                companyName={companyName}
                promoDescription={promoDescription}
                promoImage={promoImage}
                promoLocation={locationString}
                isDeliveryLocation={isDeliveryLocation}
                promoName={promoName}
                dateEnd={promoData.date_end}
                inactive={inactive}
            />
            <div className="pl-promo__info">
                <PromoStats
                    acts={promoDataStats}
                />
                {inactive === true
                    ? <div><YesNo toggleFunc={toggleFunc} isChecked={notifications} name={tr('Promo.PreviewImg.RemindMe')} color="#000000" /><span></span></div>
                    : <button className="pl-promo__getgift">{tr('Button.GetGift')}</button>
                }
            </div>
        </div>
    )
};

export default PromoTopper;
