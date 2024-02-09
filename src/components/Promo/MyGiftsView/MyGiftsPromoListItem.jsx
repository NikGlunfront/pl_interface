import React from "react"
import { NavLink } from "react-router-dom";
import { register } from 'swiper/element/bundle'
import PromoImgArea from "../ListPromoView/PromoImgArea";
import InactivePromoImg from "../ListPromoView/InactivePromoImg";
import PromoStats from "../ListPromoView/PromoStats";
import PromoBadges from "../ListPromoView/PromoBadges";
import PromoBio from "../ListPromoView/PromoBio";
import PromoLike from "../ListPromoView/PromoLike";
import PromoBrand from "../ListPromoView/PromoBrand";
import PendingChatPromo from "../../Chat/PendingChatPromo/PendingChatPromo";
import { useSelector } from "react-redux";
import ReviewChatPromo from "../../Chat/ReviewChatPromo/ReviewChatPromo";
import PromoPreview from "../PromoPreview";
import { useTranslate } from "../../../hooks/useTranslate";
register();

const MyGiftsPromoListItem = ({
    promoData
}) => {
    const { tr } = useTranslate()
    let className = 'list-item '
    const { activeMyGiftsTag: giftTag } = useSelector(state => state.filters)

    return (
        <div className={className}>
            <PromoPreview
                amountLeft={promoData.amount_left}
                companyImage={promoData.brand_img}
                companyName={promoData.brand_name}
                promoDescription={promoData.description}
                promoImage={promoData.img}
                promoLocation={promoData.location}
                promoName={promoData.name}
                dateEnd={promoData.date_end}
                inactive={promoData.inactive}
            />
            <div className="list-item__info">
                <PromoStats
                    acts={promoData.acts}
                />
                <NavLink to={`/promos/${promoData.id}`} state={{promoData: promoData}} className="list-item__morebtn">{tr('Button.More')}</NavLink>
            </div>
            {giftTag === 'waiting'
                ?
                    <PendingChatPromo 
                        brandId={promoData.brand_id}
                        brandImg={promoData.brand_img}
                        brandName={promoData.brand_name}
                        promoId={promoData.id}
                    />
                :
                    <ReviewChatPromo 
                        brandId={promoData.brand_id}
                        brandImg={promoData.brand_img}
                        brandName={promoData.brand_name}
                        promoId={promoData.id}
                    />
            
            }
        </div>
    )
};

export default MyGiftsPromoListItem;
