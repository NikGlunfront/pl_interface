import React, { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom";
import Header from "../Common/Header";
import InfoGroup from "../../containers/InfoGroup";
import brandMegafon from '../../assets/img/icons/partners/megafon.png'
import brandMts from '../../assets/img/icons/partners/mts.png'
import brandApple from '../../assets/img/icons/partners/apple.svg'
import { useDispatch } from "react-redux";
import { setPageTitle } from "../../store/slices/pageSlice/pageSlice";
import { useTranslate } from "../../hooks/useTranslate";

const PartnerPage = ({
    data
}) => {
    const navigate = useNavigate()
    const { tr } = useTranslate()
    const dispatch = useDispatch()
    const {id} = useParams();

    const [partnerData, setPartnerData] = useState({})

    useEffect(() => {
        dispatch(setPageTitle('Page.Title.Profile'))

        if (id === 1) {
            setPartnerData({
                brand_name: "Мегафон", brand_img: brandMegafon, brand_contacts: {phone: "79995553333", telegram: "https://tg.me/paymeg", whatsapp: "+79995553333", facebook: "facebook.com", website: "google.com"}, brand_role: 'Магазин электроники'
            })
        } else if (id === 3) {
            setPartnerData({
                brand_name: "Apple", brand_img: brandApple, brand_contacts: {phone: "79995553333", telegram: "https://tg.me/paymeg", whatsapp: "+79995553333", facebook: "facebook.com", website: "google.com"}, brand_role: 'Магазин электроники'
            })
        } else {
            setPartnerData({
                brand_name: "МТС", brand_img: brandMts, brand_contacts: {phone: "79995553333", telegram: "https://tg.me/paymeg", whatsapp: "+79995553333", facebook: "facebook.com", website: "google.com"}, brand_role: 'Магазин электроники'
            })
        }
    }, [])

    const returnFunction = () => {
        navigate(-1)
    }

    return (
        <div className="pl-page-container pl-partner-page">
            <Header title={'Профиль'} returnFunction={returnFunction} />
            <div className="pl-partner-page__topper">
                <img src={partnerData.brand_img} alt={partnerData.brand_name} />
                <div>
                    <strong>{partnerData.brand_name}</strong>
                    <span>{partnerData.brand_role}</span>
                </div>
            </div>
            <InfoGroup 
                title={tr('Promo.InfoGroup.Title.Contacts')} 
                className={'pl-promo-page-contacts'}
            >
                <a href="tel:89995553333" className="pl-promo-page-contacts__item pl-promo-page-contacts__item_phone">+7 999 555 33 33</a>
                <a href="https://tg.me/Pay.meg" className="pl-promo-page-contacts__item pl-promo-page-contacts__item_tg">Pay.meg</a>
                <a href="https://facebook.com" className="pl-promo-page-contacts__item pl-promo-page-contacts__item_facebook">Megaf</a>
                <a href="https://instagram.com" className="pl-promo-page-contacts__item pl-promo-page-contacts__item_insta">Megaf</a>
                <a href="https://google.com" className="pl-promo-page-contacts__item pl-promo-page-contacts__item_www">megafon.ru</a>
            </InfoGroup>
        </div>
    )
};

export default PartnerPage;
