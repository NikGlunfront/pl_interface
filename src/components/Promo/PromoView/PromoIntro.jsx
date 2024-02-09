import React, { useState } from "react"
import YesNo from "../../UI/Input/YesNo";
import PromoStats from "../ListPromoView/PromoStats";
import PromoPreview from "../PromoPreview";
import { useTranslate } from "../../../hooks/useTranslate";

const PromoTopper = ({
    promoName,
    promoImage,
    promoDescription,
    promoLocation,
    promoDataStats,
    companyImage,
    companyName,
    amountLeft,
    inactive = false,
}) => {
    let className = 'pl-promo '
    const [notifications, setNotifications] = useState(false)
    const { tr } = useTranslate()

    const toggleFunc = () => {
        setNotifications(!notifications)
    }

    return (
        <div className={className}>
            <PromoPreview 
                amountLeft={amountLeft}
                companyImage={companyImage}
                companyName={companyName}
                promoDescription={promoDescription}
                promoImage={promoImage}
                promoLocation={promoLocation}
                promoName={promoName}
                inactive={inactive}
            />
            <div className="pl-promo__info">
                <PromoStats
                    acts={promoDataStats}
                />
                {inactive === true
                    ? <div><YesNo toggleFunc={toggleFunc} isChecked={notifications} name={'Напомнить в ЛС'} color="#000000" /><span></span></div>
                    : <button className="pl-promo__getgift">{tr('Button.GetGift')}</button>
                }
            </div>
        </div>
    )
};

export default PromoTopper;
