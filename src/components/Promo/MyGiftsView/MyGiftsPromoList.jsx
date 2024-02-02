import React, { useEffect, useState } from "react"
import BannerItemList from "../BannerItemList";
import SpinLoader from "../../UI/SpinLoader/SpinLoader";
import MyGiftsPromoListItem from "./MyGiftsPromoListItem";

const MyGiftsPromoList = ({
    promos
}) => {
    const [promoArr, setPromoArr] = useState([])

    useEffect(() => {
        if (promos.length > 0) {
            setPromoArr(promos)
        } else {
            setPromoArr([])
        }
    }, [promos])
    
    return (
        <div className="pl-promolist-container">
            {promoArr.length > 0 
                ? promoArr.map(promo => (
                    <MyGiftsPromoListItem 
                        promoData={promo}
                        key={promo.id}
                    />
                ))
                : <SpinLoader />
            }
        </div>
    )
};

export default MyGiftsPromoList;
