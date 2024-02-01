import React from "react"
import { NavLink } from "react-router-dom";
import LinkOpener from "../../UI/LinkOpener/LinkOpener";
import starSvg from '../../../assets/img/icons/promo_page/review_star.svg'
import dialogSvg from '../../../assets/img/icons/promo_page/review_dialog.svg'

const PromoContacts = ({
    partner
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
                        <span>49</span>
                    </div>
                    <div>
                        <img src={starSvg} alt="Оценка" />
                        <span>4.5</span>
                    </div>
                </div>
            </NavLink>
            <div className="pl-info-group__content">
                <a href="tel:89995553333" className="pl-promo-page-contacts__item pl-promo-page-contacts__item_phone">+7 999 555 33 33</a>
                <LinkOpener
                    className={"pl-promo-page-contacts__item pl-promo-page-contacts__item_tg"}
                    url={"https://tg.me/Pay.meg"}
                >
                    Pay.meg
                </LinkOpener>
                <LinkOpener
                    className={"pl-promo-page-contacts__item pl-promo-page-contacts__item_facebook"}
                    url={"https://facebook.com"}
                >
                    Megaf
                </LinkOpener>
                <LinkOpener
                    className={"pl-promo-page-contacts__item pl-promo-page-contacts__item_insta"}
                    url={"https://instagram.com"}
                >
                    Megaf
                </LinkOpener>
                <LinkOpener
                    className={"pl-promo-page-contacts__item pl-promo-page-contacts__item_www"}
                    url={"https://google.com"}
                >
                    megafon.ru
                </LinkOpener>
            </div>
        </div>
    )
};

export default PromoContacts;
