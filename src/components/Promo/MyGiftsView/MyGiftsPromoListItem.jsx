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
register();

const MyGiftsPromoListItem = ({
    promoData
}) => {
    let className = 'list-item '
    const { activeMyGiftsTag: giftTag } = useSelector(state => state.filters)

    return (
        <div className={className}>
            <div className="list-item__img">
                <PromoBrand brandImg={promoData.brand_img} brandName={promoData.brand_name} />
                <PromoLike />
                <PromoImgArea promoData={promoData} />
                <PromoBadges 
                    days_amount_left={'12 апреля'}
                    gifts_amount_left={promoData?.amount_left}
                    inactive={promoData?.inactive}
                />
                {promoData?.inactive === true
                    ? <InactivePromoImg />
                    : ''
                }
            </div>
            <PromoBio 
                name={promoData.name}
                description={promoData.description}
                location={promoData.location}
            />
            <div className="list-item__info">
                <PromoStats
                    acts={promoData.acts}
                />
                <NavLink to={`/promos/${promoData.id}`} state={{promoData: promoData}} className="list-item__morebtn">Подробнее</NavLink>
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
