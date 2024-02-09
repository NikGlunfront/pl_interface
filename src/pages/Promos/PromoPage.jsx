import React, { useEffect, useState } from "react"
import { useLocation, useNavigate, useParams } from "react-router-dom";
import PromoTopper from "../../components/Promo/PromoView/PromoIntro";
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

const PromoPage = ({
    
}) => {
    const { id } = useParams()
    const navigate = useNavigate();
    const dispatch = useDispatch()
    const promoData = useSelector(state => state.promos.currentPromo)

    const [partnerData, setPartnerData] = useState(null)

    const returnFunction = () => {
        navigate(-1) 
    }

    useEffect(() => {
        dispatch(getCurrentPromo(id))
        dispatch(setPageTitle('Page.Title.Certificate'))
        dispatch(setSearchAvailable(false))
        document.querySelector("#root").scrollTo(0, 0);
    }, [])

    useEffect(() => {
        if (promoData) {
            console.log('data: ' + promoData)
            setPartnerData({
                id: promoData.brand_id,
                name: promoData.brand_name,
                img: promoData.brand_img,
                contacts: promoData.brand_contacts,
                role: promoData.brand_role,
            })
        }
    }, [promoData])
    

    if (!promoData) {
        return (
            <SpinLoader />
        )
    }


    return (
        <div className="pl-page-container pl-promo-page">
            <PromoTopper 
                promoData={promoData}
                promoName={promoData.name}
                promoImage={promoData.img}
                promoDescription={promoData.description}
                promoLocation={promoData.location}
                promoDataStats={promoData.acts} 
                companyImage={promoData.brand_img} 
                companyName={promoData.brand_name}
                inactive={promoData.inactive}
                amountLeft={promoData.amount_left}
            /> 
            <PromoContacts partner={partnerData} />
            <PromoAdress />
            <PromoDescription>{promoData.description}</PromoDescription>
            <PromoTags>{promoData.tags}</PromoTags>
            <PromoGallery images={promoData.img} />
        </div>
    )
};

export default PromoPage;
