import React from "react"
import { NavLink } from "react-router-dom";
import { register } from 'swiper/element/bundle'
import PromoStats from "./ListPromoView/PromoStats";
import PromoPreview from "./PromoPreview";
register();

const PromoItemList = ({
    promoData
}) => {
    let className = 'list-item '

    return (
        <div className={className}>
            <PromoPreview
                amountLeft={promoData.amount_left}
                companyImage={promoData.brand_img}
                companyName={promoData.brand_name}
                promoDescription={promoData.description}
                dateEnd={promoData.date_end}
                promoImage={promoData.img}
                promoLocation={promoData.location}
                promoName={promoData.name}
                inactive={promoData.inactive}
            />
            <div className="list-item__info">
                <PromoStats
                    acts={promoData.acts}
                />
                <NavLink to={`/promos/${promoData.id}`} state={{promoData: promoData}} className="list-item__morebtn">Подробнее</NavLink>
            </div>
        </div>
    )
};

export default PromoItemList;
