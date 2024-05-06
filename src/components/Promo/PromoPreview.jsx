import React from "react"
import PromoBio from "./ListPromoView/PromoBio";
import PromoBadges from "./ListPromoView/PromoBadges";
import PromoLike from "./ListPromoView/PromoLike";
import PromoImgArea from "./ListPromoView/PromoImgArea";
import PromoBrand from "./ListPromoView/PromoBrand";
import { useLocation } from "react-router";
import InactivePromoImg from "./ListPromoView/InactivePromoImg";
import { useTranslate } from "../../hooks/useTranslate";

const PromoPreview = ({
    promoName,
    promoImage,
    promoDescription,
    promoLocation,
    companyImage,
    companyName,
    isDeliveryLocation = false,
    amountLeft,
    dateEnd,
    isRemote,
    recieved = false,
    deleted = false,
    inactive = false,
}) => {
    const location = useLocation()
    const { tr } = useTranslate()

    return (
        <div className={'pl-promo__previewarea'}>
            <div className="pl-promo__img">
                <PromoBrand brandImg={companyImage} brandName={companyName} />
                <PromoImgArea 
                    inactive={inactive}
                    promoImage={promoImage}
                    promoName={promoName}
                />
                <PromoLike deleted={deleted} />
                {/* {inactive === false
                    ? <PromoLike deleted={deleted} />
                    : ''
                } */}
                <PromoBadges 
                    days_amount_left={dateEnd}
                    gifts_amount_left={amountLeft}
                    inactive={inactive}
                    recieved={recieved}
                    deleted={deleted}
                />
                {inactive === true && !location.pathname.includes('promos/')
                    ? <InactivePromoImg />
                    : ''
                }
                {inactive === true && location.pathname.includes('promos/')
                    ? <div className="list-item-inactive"><span>{tr('Promo.PreviewImg.Paused')}</span></div>
                    : ''
                }
            </div>
            <PromoBio 
                name={promoName}
                description={promoDescription}
                location={promoLocation}
                isRemote={isRemote}
                isDeliveryLocation={isDeliveryLocation}
            />
        </div>
    )
};

export default PromoPreview;
