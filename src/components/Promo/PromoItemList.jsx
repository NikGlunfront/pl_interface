import React, { useEffect, useState } from "react"
import { NavLink } from "react-router-dom";
import { register } from 'swiper/element/bundle'
import PromoStats from "./ListPromoView/PromoStats";
import PromoPreview from "./PromoPreview";
import { useTranslate } from "../../hooks/useTranslate";
import { useMetaData } from "../../hooks/useMetaData";
register();

const PromoItemList = ({
    promoData
}) => {
    const { tr } = useTranslate()
    const [locationString, setLocationString] = useState('')
    const [isDeliveryLocation, setIsDeliveryLocation] = useState(false)
    const { getLocationFromAddress, getLocationFromDeliveryItem } = useMetaData()
    let className = 'list-item '

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

    return (
        <div className={className}>
            <PromoPreview
                amountLeft={promoData.amount_left}
                companyImage={promoData.brand_img}
                companyName={promoData.brand_name}
                promoDescription={promoData.description}
                dateEnd={promoData.date_end}
                promoImage={promoData.img}
                promoLocation={locationString}
                isDeliveryLocation={isDeliveryLocation}
                promoName={promoData.name}
                inactive={promoData.inactive}
            />
            <div className="list-item__info">
                <PromoStats
                    acts={promoData.acts}
                />
                <NavLink to={`/promos/${promoData.id}`} state={{promoData: promoData}} className="list-item__morebtn">{tr('Button.More')}</NavLink>
            </div>
        </div>
    )
};

export default PromoItemList;
