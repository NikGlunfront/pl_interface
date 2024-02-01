import React, { useEffect, useState } from "react"
import PromoItemList from "./PromoItemList";
import BannerItemList from "./BannerItemList";
import SpinLoader from "../UI/SpinLoader/SpinLoader";
import { useSelector } from "react-redux";

const PromoList = ({
    promos,
    banners
}) => {
    const [promoArr, setPromoArr] = useState([])

    useEffect(() => {
        if (promos.length > 0) {
            if (banners) {
                setPromoArr([...promos.slice(0,2), ...banners, ...promos.slice(2)])
            }
            else {
                setPromoArr(promos)
            }
        } else {
            setPromoArr([])
        }
    }, [promos, banners])
    
    return (
        <div className="pl-promolist-container">
            {promoArr.length > 0 
                ? promoArr.map(promo => (
                    promo.banner_id
                        ? 
                        <BannerItemList 
                            bannerData={promo}
                            key={'banner_' + promo.banner_id}
                        />
                        :
                        <PromoItemList 
                            promoData={promo}
                            key={promo.id}
                        />
                ))
                : <SpinLoader />
            }
        </div>
    )
};

export default PromoList;
