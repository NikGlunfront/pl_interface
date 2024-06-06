import React, { useEffect, useState } from 'react';
import { useMetaData } from '../../../hooks/useMetaData';
import { useTranslate } from '../../../hooks/useTranslate';
import { register } from 'swiper/element/bundle'
import PromoPreview from '../../Promo/PromoPreview';
import PromoStats from '../../Promo/ListPromoView/PromoStats';
import { NavLink, useLocation } from 'react-router-dom';
import PromoBrand from '../../Promo/ListPromoView/PromoBrand';
import PromoImgArea from '../../Promo/ListPromoView/PromoImgArea';
import PromoLike from '../../Promo/ListPromoView/PromoLike';
import PromoBadges from '../../Promo/ListPromoView/PromoBadges';
import InactivePromoImg from '../../Promo/ListPromoView/InactivePromoImg';
import PromoBio from '../../Promo/ListPromoView/PromoBio';
import AccontPromoItemBioModerating from './components/AccontPromoItemBioModerating';
register();

const AccountPromoItem = ({
    promoData,
    openStats
}) => {
    const { tr } = useTranslate()
    const location = useLocation()
    const [locationString, setLocationString] = useState('')
    const [isDeliveryLocation, setIsDeliveryLocation] = useState(false)
    const { getLocationFromAddress, getLocationFromDeliveryItem } = useMetaData()
    let className = 'list-item pl-moderate-promo'

    useEffect(() => {
        if (promoData !== null) {
            if (promoData.adresses.length === 0) {
                setLocationString(getLocationFromDeliveryItem(promoData.delivery))
                setIsDeliveryLocation(true)
            } else {
                setLocationString(getLocationFromAddress(promoData.adresses[0]))
                setIsDeliveryLocation(false)
            }
        }
    }, [promoData])


    return (
        <div className={className}>
            <div className={'pl-promo__previewarea'}>
                <div className="pl-promo__img">
                    <PromoBrand brandImg={promoData.brand_img} brandName={promoData.brand_name} />
                    <PromoImgArea 
                        inactive={promoData.status === "M" || promoData.status === "P" ? true : false}
                        promoImage={promoData.img}
                        promoName={promoData.name}
                        deleted={false}
                    />
                    <PromoBadges 
                        days_amount_left={promoData.date_end}
                        gifts_amount_left={promoData.amount_left}
                        inactive={promoData.inactive}
                        recieved={false}
                        deleted={false}
                    />
                    {promoData.status === "M" &&
                        <div className='pl-moderate-promo_moderating'>{tr('На модерации')}</div>
                    }
                    {promoData.status === "P" &&
                        <div className='pl-moderate-promo_paused'>
                            {tr('Временно на паузе')}
                            <span>
                                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8.22805 6.42559C8.81919 5.96306 9.25067 5.32878 9.46246 4.611C9.67425 3.89323 9.65582 3.12765 9.40973 2.42078C9.16364 1.71391 8.70213 1.1009 8.08941 0.667026C7.47669 0.233154 6.74322 0 5.99106 0C5.23889 0 4.50543 0.233154 3.8927 0.667026C3.27998 1.1009 2.81848 1.71391 2.57239 2.42078C2.3263 3.12765 2.30787 3.89323 2.51966 4.611C2.73145 5.32878 3.16293 5.96306 3.75407 6.42559C2.74113 6.82919 1.85732 7.49858 1.19684 8.36243C0.536353 9.22627 0.123966 10.2522 0.00363697 11.3308C-0.00507307 11.4095 0.00189835 11.4892 0.024153 11.5653C0.0464077 11.6413 0.0835099 11.7123 0.133341 11.7741C0.23398 11.8989 0.380358 11.9789 0.540274 11.9964C0.70019 12.0139 0.860543 11.9675 0.986059 11.8674C1.11158 11.7673 1.19197 11.6217 1.20956 11.4627C1.34196 10.2905 1.90399 9.20788 2.78825 8.42172C3.67252 7.63556 4.81703 7.20096 6.00312 7.20096C7.18921 7.20096 8.33372 7.63556 9.21798 8.42172C10.1022 9.20788 10.6643 10.2905 10.7967 11.4627C10.8131 11.61 10.8838 11.7461 10.9951 11.8447C11.1065 11.9432 11.2506 11.9973 11.3996 11.9964H11.466C11.624 11.9783 11.7685 11.8988 11.8679 11.7753C11.9673 11.6517 12.0135 11.4941 11.9966 11.3368C11.8757 10.2551 11.4611 9.22657 10.7972 8.3614C10.1333 7.49623 9.24519 6.82705 8.22805 6.42559ZM5.99106 5.99984C5.51404 5.99984 5.04773 5.85916 4.6511 5.5956C4.25448 5.33204 3.94534 4.95742 3.7628 4.51913C3.58025 4.08084 3.53249 3.59856 3.62555 3.13327C3.71861 2.66799 3.94832 2.2406 4.28562 1.90514C4.62292 1.56969 5.05268 1.34124 5.52053 1.24869C5.98838 1.15614 6.47332 1.20364 6.91403 1.38519C7.35474 1.56673 7.73142 1.87417 7.99644 2.26862C8.26146 2.66307 8.40291 3.12682 8.40291 3.60122C8.40291 4.23737 8.1488 4.84747 7.69649 5.2973C7.24418 5.74713 6.63072 5.99984 5.99106 5.99984Z" fill="white"/>
                                </svg>
                                54 ожидают
                            </span>
                        </div>
                    }
                </div>
                <AccontPromoItemBioModerating 
                    name={promoData.name}
                    description={promoData.description}
                    location={locationString}
                    isDeliveryLocation={isDeliveryLocation}
                />
            </div>
            <div className="list-item__info pl-moderate-promo__info">
                <div className="list-item__interacts">
                    <div className="list-item__num list-item__num_views">{promoData.acts.views}</div>
                    <div className="pl-moderate-promo__interact pl-moderate-promo__interact_4">
                        <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="0.5" y="0.5" width="10" height="10" rx="1.5" stroke="black"/>
                        <path d="M8 3L4.88995 8L3 5.77778" stroke="black" strokeLinecap="square"/>
                        </svg>
                        {23}
                    </div>
                    <div className="list-item__num list-item__num_gifts">{promoData.acts.scs}</div>
                    <div className={"list-item__num list-item__num_wishes " + (promoData.acts.wish > 0 ? "list-item__num_wishes_full" : "")}>{promoData.acts.wish}</div>
                    <div className="pl-moderate-promo__interact pl-moderate-promo__interact_5">
                        <svg width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6.02247 0.538457C6.16806 0.0694177 6.83194 0.0694189 6.97753 0.538459L8.0204 3.89831C8.08606 4.10984 8.28305 4.25297 8.50452 4.25005L12.0222 4.20363C12.5133 4.19715 12.7184 4.82853 12.3173 5.11194L9.44418 7.14202C9.26329 7.26983 9.18804 7.50142 9.25926 7.71114L10.3904 11.0423C10.5483 11.5073 10.0113 11.8976 9.61778 11.6037L6.7992 9.49848C6.62175 9.36594 6.37825 9.36594 6.2008 9.49848L3.38222 11.6037C2.98874 11.8976 2.45165 11.5073 2.60957 11.0423L3.74074 7.71114C3.81196 7.50142 3.73671 7.26983 3.55582 7.14202L0.682673 5.11194C0.281578 4.82853 0.486729 4.19715 0.977801 4.20363L4.49548 4.25005C4.71695 4.25297 4.91394 4.10984 4.9796 3.89831L6.02247 0.538457Z" fill="#F7AC2A"/>
                        </svg>

                        {4.9}
                    </div>
                </div>
                <div className="list-item__interacts">
                    <div className="pl-moderate-promo__interact pl-moderate-promo__interact_1">{promoData.acts.not_interest}</div>
                    <div className="pl-moderate-promo__interact pl-moderate-promo__interact_2">{promoData.acts.blocked}</div>
                    <div className="pl-moderate-promo__interact pl-moderate-promo__interact_3">{promoData.acts.ticket}</div>
                </div>
                {/* <NavLink to={`/promos/${promoData.id}`} state={{promoData: promoData}} className="list-item__morebtn">{tr('Button.More')}</NavLink> */}
            </div>
            <div className="pl-moderate-promo__actions">
                <div className="pl-moderate-promo__btn" onClick={openStats}>
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <line x1="0.5" y1="5" x2="0.5" y2="10" stroke="black"/>
                    <line x1="3.5" y1="2" x2="3.5" y2="10" stroke="black"/>
                    <line x1="6.5" y1="3" x2="6.5" y2="10" stroke="black"/>
                    <line x1="9.5" y1="-2.26216e-08" x2="9.5" y2="10" stroke="black"/>
                    </svg>
                    статистика
                </div>
                <div className="pl-moderate-promo__btn">
                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.245 0.997224L10.245 0.997222C10.4042 0.940144 10.6266 0.937137 10.8679 0.975682C11.1106 1.01445 11.378 1.09617 11.6304 1.21426C12.7943 1.75883 13.6802 2.79517 13.9832 3.97025C14.078 4.33769 14.0739 4.56747 13.9584 4.82223L13.9584 4.82224C13.9479 4.8452 13.9265 4.87537 13.8949 4.91433C13.8623 4.95448 13.8159 5.00763 13.7519 5.07753C13.6239 5.21739 13.4241 5.42632 13.1213 5.7362C12.5157 6.35608 11.4966 7.38149 9.81268 9.0696C8.16992 10.7165 7.14613 11.7389 6.51659 12.3576C6.20188 12.6669 5.98535 12.8756 5.83915 13.0111C5.76608 13.0789 5.71015 13.1287 5.66807 13.1638C5.62731 13.1979 5.59603 13.2211 5.57344 13.2321C5.5403 13.2483 5.47797 13.2683 5.38851 13.2929C5.29753 13.3178 5.17448 13.3484 5.0169 13.3853C4.70169 13.4592 4.24675 13.5586 3.63076 13.6886C2.63661 13.8983 2.11987 14.0059 1.82128 14.0387C1.67161 14.0552 1.57159 14.0536 1.49146 14.0343C1.40998 14.0147 1.35323 13.9777 1.2906 13.9337L10.245 0.997224ZM10.245 0.997224C10.1509 1.03098 10.0168 1.10482 9.94371 1.16366M10.245 0.997224L9.94371 1.16366M9.94371 1.16366C9.93271 1.17251 9.89382 1.2099 9.83375 1.26858C9.77223 1.32869 9.6857 1.41393 9.57701 1.52147C9.35963 1.73656 9.05341 2.04107 8.68083 2.41255C7.93567 3.15551 6.925 4.16651 5.82866 5.2662C4.06953 7.03075 3.07061 8.03559 2.50387 8.61767C2.2206 8.90861 2.04471 9.09453 1.93569 9.21713C1.82843 9.33775 1.78122 9.40197 1.76221 9.44778C1.74717 9.484 1.72369 9.56763 1.69467 9.6817C1.66521 9.7975 1.62905 9.94881 1.58874 10.1236C1.50809 10.4733 1.4106 10.918 1.31638 11.3626C1.22216 11.8072 1.13116 12.2521 1.06353 12.6021C1.02972 12.777 1.0017 12.9286 0.982031 13.0446C0.962705 13.1586 0.950584 13.243 0.950186 13.2803C0.949195 13.3727 0.951746 13.4376 0.966385 13.4966C0.981258 13.5565 1.00776 13.6072 1.04843 13.673L9.94371 1.16366ZM1.97777 13.0674C1.95232 13.0723 1.93029 13.0765 1.91188 13.0799C1.91535 13.0612 1.91961 13.0389 1.92461 13.0131C1.94117 12.9279 1.96559 12.8064 1.99544 12.6604C2.05512 12.3683 2.13641 11.9781 2.21966 11.5832C2.30292 11.1882 2.38812 10.7885 2.45562 10.4772C2.52139 10.1739 2.56966 9.95796 2.58332 9.90928L2.58534 9.90629C2.58895 9.90125 2.59456 9.89405 2.60244 9.88448C2.61812 9.86544 2.64107 9.83911 2.67112 9.80573C2.73111 9.73907 2.81791 9.64589 2.9279 9.52983C3.14781 9.2978 3.45949 8.97535 3.83262 8.59293C4.57884 7.82815 5.57032 6.82412 6.56384 5.82535C7.55735 4.82657 8.55279 3.83318 9.30693 3.08967C9.68403 2.71789 10.0007 2.40873 10.2265 2.19265C10.3395 2.08456 10.4294 2.00003 10.4928 1.94267C10.5246 1.91392 10.5491 1.89245 10.5664 1.87835C10.5718 1.8739 10.5762 1.87044 10.5797 1.86784C10.6286 1.87164 10.7421 1.88998 10.8474 1.91234L10.8578 1.86343L10.8474 1.91234C11.2152 1.9904 11.6136 2.20729 11.975 2.51052C12.3362 2.81346 12.6575 3.20009 12.8724 3.61369C12.934 3.73236 12.9991 3.89419 13.0488 4.04372C13.0736 4.11835 13.0943 4.18922 13.1087 4.24946C13.1214 4.30208 13.1286 4.34403 13.1304 4.37263C13.1292 4.37413 13.1279 4.37584 13.1263 4.37779C13.1168 4.3896 13.102 4.40679 13.0815 4.42969C13.0406 4.47531 12.9788 4.54149 12.896 4.62848C12.7304 4.80236 12.4816 5.05816 12.1492 5.39635C11.4845 6.07267 10.4859 7.07786 9.15068 8.41474L5.16638 12.4041L3.51654 12.7514C3.05892 12.8478 2.64174 12.9341 2.33828 12.9957C2.18653 13.0264 2.06333 13.051 1.97777 13.0674Z" fill="black" stroke="black" stroke-width="0.1"/>
                    </svg>
                    изменить
                </div>
                <div className="pl-moderate-promo__btn">
                    <svg width="7" height="14" viewBox="0 0 7 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 1L1 13" stroke="black" strokeLinecap="square"/>
                    <path d="M6 1L6 13" stroke="black" strokeLinecap="square"/>
                    </svg>
                    стоп
                </div>
                <div className="pl-moderate-promo__btn">
                    <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4.35355 0.646446C4.15829 0.451184 3.84171 0.451184 3.64645 0.646446L0.464467 3.82843C0.269204 4.02369 0.269204 4.34027 0.464466 4.53553C0.659729 4.7308 0.976311 4.7308 1.17157 4.53553L4 1.70711L6.82843 4.53553C7.02369 4.7308 7.34027 4.7308 7.53553 4.53553C7.7308 4.34027 7.7308 4.02369 7.53553 3.82843L4.35355 0.646446ZM4.5 14L4.5 1L3.5 1L3.5 14L4.5 14Z" fill="black"/>
                    </svg>
                    в топ
                </div>
            </div>
        </div>
    );
};

export default AccountPromoItem;