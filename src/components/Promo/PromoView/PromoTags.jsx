import React from "react"
import InfoGroup from "../../../containers/InfoGroup";

const PromoTags = ({
    children
}) => {

    return (
        <InfoGroup title={'Теги'} className={'pl-promo-page-tags'}>
            <span className="pl-promo-page-tags__item pl-promo-page-tags__item_active">Ресторан</span>
            <span className="pl-promo-page-tags__item">Спорт</span>
            <span className="pl-promo-page-tags__item pl-promo-page-tags__item_active">Пиво</span>
        </InfoGroup>
    )
};

export default PromoTags;