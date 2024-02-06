import React, { useEffect, useState } from "react"
import InfoGroup from "../../../containers/InfoGroup";
import { useSelector } from "react-redux";
import PromoStats from "../../../components/Promo/ListPromoView/PromoStats";
import PromoPreview from "../../../components/Promo/PromoPreview";

const CreatePromoPreview = ({
    images,
    name,
    description,
    location,
    locationReference,
    isRemote
}) => {
    const companyMeta = useSelector(state => state.user.company)
    const [promoData, setPromoData] = useState(null)
    useEffect(() => {
        setPromoData({
            img: [],
            amount_left:0,
            name: "",
            description:"",
            location:"",
            acts: {
                views:0,
                scs:0,
                wish:0,
            },
            brand_id:3,
            brand_name: companyMeta.name,
            brand_img: companyMeta.icon,
            brand_contacts: {
                phone: "79995553333",
                telegram: "https://tg.me/paymeg",
                whatsapp: "+79995553333",
                facebook: "facebook.com",
                website: "google.com"
            },
            brand_role:"Магазин электроники"
        })
    }, [])

    if (promoData === null) {
        return
    }

    return (
        <InfoGroup title={'Превью'} className={'pl-page-create-promo__preview'}>
            <div className={'pl-promo'}>
                <PromoPreview
                    amountLeft={promoData.amount_left}
                    companyImage={promoData.brand_img}
                    companyName={promoData.brand_name}
                    promoDescription={description}
                    promoImage={promoData.img}
                    promoLocation={location + (locationReference ? `, ${locationReference}` : '')}
                    promoName={name}
                    dateEnd={promoData.date_end}
                    inactive={promoData.inactive}
                    isRemote={isRemote}
                />
                <div className="list-item__info">
                    <PromoStats
                        acts={promoData.acts}
                    />
                    <div className="list-item__morebtn">Подробнее</div>
                </div>
                {/* <PromoContacts partner={partnerData} /> */}
                {/* <PromoAdress /> */}
                {/* <PromoDescription>{promoData.description}</PromoDescription> */}
                {/* <PromoTags>{promoData.tags}</PromoTags> */}
                {/* <PromoGallery /> */}
            </div>
        </InfoGroup>
    )
};

export default CreatePromoPreview;
