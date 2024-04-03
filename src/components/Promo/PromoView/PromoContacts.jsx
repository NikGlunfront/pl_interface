import React from "react"
import { NavLink } from "react-router-dom";
import LinkOpener from "../../UI/LinkOpener/LinkOpener";
import starSvg from '../../../assets/img/icons/promo_page/review_star.svg'
import dialogSvg from '../../../assets/img/icons/promo_page/review_dialog.svg'

const PromoContacts = ({
    partner,
    phone,
    tg,
    whatsapp,
    facebook,
    instagram,
    website,
    email,
    reviewCount = 94,
    rating = 4.5
}) => {

    if (!partner) {
        return (
            <div></div>
        )
    }

    return (
        <div className="pl-promo-page-contacts">
            <NavLink to={`/partners/${partner.id}`} state={{partner: partner}} className="pl-info-group__title">
                {partner?.name}
                <div className="pl-promo-page-contacts__reviews">
                    <div>
                        <img src={dialogSvg} alt="Отзывы" />
                        <span>{reviewCount}</span>
                    </div>
                    <div>
                        <img src={starSvg} alt="Оценка" />
                        <span>{rating}</span>
                    </div>
                </div>
            </NavLink>
            <div className="pl-info-group__content">
                {phone !== null
                    ? <a href="tel:89995553333" className="pl-promo-page-contacts__item pl-promo-page-contacts__item_phone">{phone}</a>
                    : <></>
                }
                {tg !== null
                    ? 
                    <LinkOpener
                        className={"pl-promo-page-contacts__item pl-promo-page-contacts__item_tg"}
                        url={"https://tg.me/Pay.meg"}
                    >{tg}</LinkOpener>
                    : 
                    <></>
                }
                {whatsapp !== null
                    ? 
                    <LinkOpener
                        className={"pl-promo-page-contacts__item pl-promo-page-contacts__item_tg"}
                        url={"https://tg.me/Pay.meg"}
                    >{whatsapp}</LinkOpener>
                    : 
                    <></>
                }
                {facebook !== null
                    ? 
                    <LinkOpener
                        className={"pl-promo-page-contacts__item pl-promo-page-contacts__item_facebook"}
                        url={"https://tg.me/Pay.meg"}
                    >{facebook}</LinkOpener>
                    : 
                    <></>
                }
                {instagram !== null
                    ? 
                    <LinkOpener
                        className={"pl-promo-page-contacts__item pl-promo-page-contacts__item_insta"}
                        url={"https://tg.me/Pay.meg"}
                    >{instagram}</LinkOpener>
                    : 
                    <></>
                }
                {website !== null
                    ? 
                    <LinkOpener
                        className={"pl-promo-page-contacts__item pl-promo-page-contacts__item_www"}
                        url={"https://tg.me/Pay.meg"}
                    >{website}</LinkOpener>
                    : 
                    <></>
                }
                {email !== null
                    ? 
                    <LinkOpener
                        className={"pl-promo-page-contacts__item pl-promo-page-contacts__item_tg"}
                        url={"https://tg.me/Pay.meg"}
                    >{email}</LinkOpener>
                    : 
                    <></>
                }
            </div>
        </div>
    )
};

export default PromoContacts;
