import React, { useEffect, useState } from "react"
import { NavLink } from "react-router-dom";
import { register } from 'swiper/element/bundle'
import PromoStats from "../ListPromoView/PromoStats";
import PendingChatPromo from "../../Chat/PendingChatPromo/PendingChatPromo";
import { useSelector } from "react-redux";
import ReviewChatPromo from "../../Chat/ReviewChatPromo/ReviewChatPromo";
import PromoPreview from "../PromoPreview";
import { useTranslate } from "../../../hooks/useTranslate";
import Fancybox from "../../UI/Fancybox/Fancybox";
import Modal from "../../UI/Modal/Modal";
import qrCodeImage from '../../../assets/img/promos/qrcode.png'
import { useMetaData } from "../../../hooks/useMetaData";
register();

const MyGiftsPromoListItem = ({
    promoData
}) => {
    const { tr } = useTranslate()
    let className = 'list-item '
    const { activeMyGiftsTag: giftTag } = useSelector(state => state.filters)
    const [isModalActive, setIsModalActive] = useState(false)
    const [locationString, setLocationString] = useState('')
    const [isDeliveryLocation, setIsDeliveryLocation] = useState(false)
    const { getLocationFromAddress, getLocationFromDeliveryItem } = useMetaData()

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
            <PromoPreview
                amountLeft={promoData.amount_left}
                companyImage={promoData.brand_img}
                companyName={promoData.brand_name}
                promoDescription={promoData.description}
                promoImage={promoData.img}
                promoLocation={locationString}
                isDeliveryLocation={isDeliveryLocation}
                promoName={promoData.name}
                dateEnd={promoData.date_end}
                inactive={promoData.inactive}
                recieved={promoData.recieved ? promoData.recieved : false}
                deleted={promoData.deleted ? promoData.deleted : false}
            />
            {giftTag === 'waiting'
                ?
                <div className="list-item__info">
                    <PromoStats
                        acts={promoData.acts}
                    />
                        <div 
                            className="pending-order-list-item__btn pending-order-list-item__btn_compose"
                            onClick={() => setIsModalActive(true)}
                        ></div>
                        <Modal
                            className={'qr-code-popup'}
                            isActive={isModalActive}
                            setActive={setIsModalActive}
                        >
                            <div className="qr-code-popup__company">
                                <img src={promoData.brand_img} alt="" />
                            </div>
                            <div className="qr-code-popup__title">Получить подарок</div>
                            <div className="qr-code-popup__subtitle">Покажите этот куаркод на месте получения подарка или отправьте ссылку партнёру для подтверждения вашей заявки.</div>
                            <div className="qr-code-popup__code">
                                <img src={qrCodeImage} alt="" />
                            </div>
                            <div className="qr-code-popup__link">https://www.payless.bot/64688529id{promoData.id}</div>
                            <div className="qr-code-popup__btns">
                                <div className="qr-code-popup__deletebtn"></div>
                                <div className="qr-code-popup__copybtn">Скопировать</div>
                                <div className="qr-code-popup__sendbtn"></div>
                            </div>
                        </Modal>

                    <NavLink to={`/promos/${promoData.id}`} state={{promoData: promoData}} className="list-item__morebtn">{tr('Button.More')}</NavLink>
                </div>
                : 
                <></>
            }
            {giftTag === 'waiting'
                ?
                    <PendingChatPromo 
                        brandId={promoData.brand_id}
                        brandImg={promoData.brand_img}
                        brandName={promoData.brand_name}
                        promoId={promoData.id}
                    />
                :
                    <ReviewChatPromo 
                        brandId={promoData.brand_id}
                        brandImg={promoData.brand_img}
                        brandName={promoData.brand_name}
                        promoId={promoData.id}
                    />
            
            }
        </div>
    )
};

export default MyGiftsPromoListItem;
