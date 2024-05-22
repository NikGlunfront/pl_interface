import React, { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom";
import Header from "../Common/Header";
import InfoGroup from "../../containers/InfoGroup";
import brandMegafon from '../../assets/img/icons/partners/citilink_logo.jpg'
import brandMts from '../../assets/img/icons/partners/cum_logo.png'
import brandApple from '../../assets/img/icons/partners/apple.svg'
import { useDispatch } from "react-redux";
import { setPageTitle } from "../../store/slices/pageSlice/pageSlice";
import { useTranslate } from "../../hooks/useTranslate";
import PromoAdress from "../../components/Promo/PromoView/PromoAdress";
import { adresses } from "../../store/slices/promos/promosSlice";
import ReviewMessageSlider from "../../components/Chat/ReviewChatPromo/ReviewMessageSlider";

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
        console.log(id)
        setPartnerData({
            brand_name: "ЦУМ", brand_img: brandMts, brand_contacts: {phone: "79995553333", telegram: "https://tg.me/paymeg3"}, brand_role: 'Магазин электроники'
        })
        if (id == 1) {
            setPartnerData({
                brand_name: "Ситилинк", brand_img: brandMegafon, brand_contacts: {phone: "79995553333", telegram: "https://tg.me/paymeg1"}, brand_role: 'Магазин электроники'
            })
        } else if (id == 3) {
            setPartnerData({
                brand_name: "Apple", brand_img: brandApple, brand_contacts: {phone: "79995553333", telegram: "https://tg.me/paymega"}, brand_role: 'Магазин электроники'
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
            <div className="pl-partner-page__stats">
                <div>
                    <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.04827 0.951057C7.34629 0.026974 8.65371 0.0269713 8.95173 0.951055L10.0096 4.23108C10.143 4.64493 10.5286 4.92509 10.9635 4.92414L14.4098 4.91661C15.3808 4.91448 15.7848 6.15791 14.998 6.7269L12.2054 8.74654C11.8531 9.00136 11.7058 9.45467 11.8411 9.86793L12.9132 13.1433C13.2153 14.0661 12.1576 14.8346 11.3733 14.2621L8.58955 12.2303C8.23832 11.9739 7.76168 11.9739 7.41045 12.2303L4.6267 14.2621C3.84243 14.8346 2.78471 14.0661 3.08677 13.1433L4.15892 9.86794C4.2942 9.45467 4.14691 9.00136 3.79456 8.74654L1.00196 6.72691C0.215194 6.15791 0.619206 4.91448 1.59015 4.91661L5.03653 4.92414C5.47137 4.92509 5.85698 4.64493 5.99045 4.23108L7.04827 0.951057Z" fill="#F7AC2A"/>
                    </svg>
                    4.5
                </div>
                <div>
                    <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M7.78521 0.569569C4.85044 0.889209 2.40732 3.13138 1.90056 5.9886C1.69451 7.15228 1.80032 8.26985 2.14638 9.27957C2.48528 10.2713 2.56723 11.349 2.16945 12.3189C1.69928 13.4661 1 13.8131 1 13.8131C1 13.8131 2.4996 14.3 4.31027 13.724C5.15275 13.4552 6.04376 13.3919 6.90216 13.6084C7.83135 13.8421 8.83772 13.8866 9.88227 13.6858C12.7669 13.1317 15.0016 10.7121 15.2872 7.83767C15.7065 3.61436 12.0955 0.0998777 7.78521 0.569569Z" stroke="#8A8A8A" stroke-linecap="round" stroke-linejoin="round"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M11.2713 7.112C11.2713 6.7324 11.5849 6.42432 11.9713 6.42432C12.3577 6.42432 12.6714 6.7324 12.6714 7.112C12.6714 7.49159 12.3577 7.79967 11.9713 7.79967C11.5849 7.79967 11.2713 7.49159 11.2713 7.112ZM5.80159 6.42444C5.41517 6.42444 5.10156 6.73252 5.10156 7.11212C5.10156 7.49172 5.41517 7.7998 5.80159 7.7998C6.188 7.7998 6.50161 7.49172 6.50161 7.11212C6.50161 6.73252 6.188 6.42444 5.80159 6.42444ZM8.88557 6.42444C8.49916 6.42444 8.18555 6.73252 8.18555 7.11212C8.18555 7.49172 8.49916 7.7998 8.88557 7.7998C9.27198 7.7998 9.5856 7.49172 9.5856 7.11212C9.5856 6.73252 9.27198 6.42444 8.88557 6.42444Z" fill="#8A8A8A"/>
                    </svg>
                    34
                </div>
                <div>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M15.0003 8.77862H1V6.44524C1 5.58577 1.69613 4.88965 2.55559 4.88965H13.4447C14.3042 4.88965 15.0003 5.58577 15.0003 6.44524V8.77862Z" stroke="#8A8A8A" stroke-linecap="round" stroke-linejoin="round"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M11.8867 15.0002H4.10877C2.81997 15.0002 1.77539 13.9556 1.77539 12.6668V8.77783H14.2201V12.6668C14.2201 13.9556 13.1755 15.0002 11.8867 15.0002Z" stroke="#8A8A8A" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M8 4.5C8 4.5 8 8.00008 8 8.77797" stroke="#8A8A8A" stroke-linecap="square" stroke-linejoin="round"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M8 4.88881C8 4.88881 8.85246 1.99464 10.3443 1.24173C12.0049 0.403272 13.6063 1.89819 12.0049 3.39389C11.2037 4.14135 9.60225 4.88881 8 4.88881Z" stroke="#8A8A8A" stroke-linecap="round" stroke-linejoin="round"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M7.99877 4.88881C7.99877 4.88881 7.14631 1.99464 5.6545 1.24173C3.99391 0.403272 2.39243 1.89819 3.99391 3.39389C4.79504 4.14135 6.39651 4.88881 7.99877 4.88881Z" stroke="#8A8A8A" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    25
                </div>
            </div>
            <InfoGroup 
                title={tr('Promo.InfoGroup.Title.Contacts')} 
                className={'pl-promo-page-contacts'}
            >
                <a href="tel:89995553333" className="pl-promo-page-contacts__item pl-promo-page-contacts__item_phone">+7 999 555 33 33</a>
                <a href="https://tg.me/Pay.meg" className="pl-promo-page-contacts__item pl-promo-page-contacts__item_tg">Pay.meg</a>
            </InfoGroup>
            <PromoAdress adresses={adresses} />
            <InfoGroup
                title={tr('Отзывы')}
            >
                <ReviewMessageSlider 
                    companyReply={1}
                    userReview={1}
                    userName={'Ольга'}
                />
                <ReviewMessageSlider 
                    companyReply={null}
                    userReview={1}
                    userName={'Олег'}
                />
                <ReviewMessageSlider 
                    companyReply={1}
                    userReview={1}
                    userName={'Иван'}
                />
            </InfoGroup>
        </div>
    )
};

export default PartnerPage;
