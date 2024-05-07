import React, { useEffect, useState } from "react"
import { useLocation, useNavigate, useParams } from "react-router-dom";
import PromoTopper from "../../components/Promo/PromoView/PromoTopper";
import PromoAdress from "../../components/Promo/PromoView/PromoAdress";
import PromoContacts from "../../components/Promo/PromoView/PromoContacts";
import PromoDescription from "../../components/Promo/PromoView/PromoDescription";
import PromoTags from "../../components/Promo/PromoView/PromoTags";
import PromoGallery from "../../components/Promo/PromoView/PromoGallery";
import Header from "../Common/Header";
import { useDispatch, useSelector } from "react-redux";
import { getCurrentPromo } from "../../store/slices/promos/promosSlice";
import SpinLoader from "../../components/UI/SpinLoader/SpinLoader";
import { setPageTitle, setSearchAvailable } from "../../store/slices/pageSlice/pageSlice";
import PromoDelivery from "../../components/Promo/PromoView/PromoDelivery";
import FixedPromoTopper from "./FixedPromoTopper";

const PromoPage = ({
    
}) => {
    const { id } = useParams()
    const dispatch = useDispatch()
    const promoData = useSelector(state => state.promos.currentPromo)
    const { tags: activeTags } = useSelector(state => state.filters)
    const [partnerData, setPartnerData] = useState(null)

    useEffect(() => {
        dispatch(getCurrentPromo(id))
        dispatch(setPageTitle('Page.Title.Certificate'))
        dispatch(setSearchAvailable(false))
        document.querySelector("#root").scrollTo(0, 0);
    }, [])

    useEffect(() => {
        if (promoData) {
            setPartnerData({
                id: promoData.brand_id,
                name: promoData.brand_name,
                img: promoData.brand_img,
                contacts: promoData.brand_contacts,
                role: promoData.brand_role,
            })
        }
    }, [promoData])
    

    if (!promoData || partnerData === null) {
        return (
            <SpinLoader />
        )
    }


    return (
        <div className="pl-page-container pl-promo-page">
            <FixedPromoTopper promoName={promoData.name} promoPreview={promoData.img[0]} />
            <PromoTopper 
                promoData={promoData}
                promoName={promoData.name}
                promoImage={promoData.img}
                promoDescription={promoData.description}
                promoDataStats={promoData.acts} 
                companyImage={promoData.brand_img} 
                companyName={promoData.brand_name}
                inactive={promoData.inactive}
                amountLeft={promoData.amount_left}
            /> 
            <PromoContacts 
                partner={partnerData} 
                email={null}
                facebook={null}
                instagram={null}
                phone={partnerData.contacts.phone ? partnerData.contacts.phone : null}
                tg={partnerData.contacts.tg ? partnerData.contacts.tg : null}
                website={null}
                whatsapp={null}
                rating={5}
                reviewCount={37}

            />
            <PromoAdress adresses={promoData.adresses} />
            <PromoDelivery delivery={promoData.delivery} />
            <PromoDescription>{promoData.description}</PromoDescription>
            <PromoTags tags={[1,2,3,4,7,8,9,10,11,12,13]} activeTagsList={activeTags}>{promoData.tags}</PromoTags>
            <PromoGallery images={promoData.img} />
        </div>
    )
};

export default PromoPage;
