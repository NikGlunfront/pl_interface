import React, { useState } from "react"
import YesNo from "../../UI/Input/YesNo";
import PromoStats from "../ListPromoView/PromoStats";
import PromoBadges from "../ListPromoView/PromoBadges";
import PromoBio from "../ListPromoView/PromoBio";
import PromoLike from "../ListPromoView/PromoLike";
import PromoBrand from "../ListPromoView/PromoBrand";

const PromoTopper = ({
    promoData
}) => {
    let className = 'pl-promo '
    const [notifications, setNotifications] = useState(false)

    const toggleFunc = () => {
        setNotifications(!notifications)
    }

    return (
        <div className={className}>
            <div className="pl-promo__img">
                <PromoBrand brandImg={promoData.brand_img} brandName={promoData.brand_name} />
                <img  
                    src={promoData.img}
                    alt={promoData.name}
                    title={promoData.name}
                />
                <PromoLike />
                <PromoBadges 
                    days_amount_left={'12 апреля'}
                    gifts_amount_left={promoData?.amount_left}
                    inactive={promoData?.inactive}
                />
                {promoData?.inactive === true
                    ? <div className="list-item-inactive"><span>Временно на паузе</span></div>
                    : ''
                }
            </div>
            <PromoBio 
                name={promoData.name}
                description={promoData.description}
                location={promoData.location}
            />
            <div className="pl-promo__info">
                <PromoStats
                    acts={promoData.acts}
                />
                {promoData?.inactive === true
                    ? <div><YesNo toggleFunc={toggleFunc} isChecked={notifications} name={'Напомнить в ЛС'} color="#000000" /><span></span></div>
                    : <button className="pl-promo__getgift">Получить подарок</button>
                }
            </div>
        </div>
    )
};

export default PromoTopper;
