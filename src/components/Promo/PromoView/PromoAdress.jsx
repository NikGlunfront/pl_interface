import React from "react"
import mapImg from '../../../assets/img/map_img.png';
import LinkOpener from "../../UI/LinkOpener/LinkOpener";

const PromoAdress = () => {

    return (
        <div className={'pl-info-group'}>
            <LinkOpener
                className={"pl-info-group__title pl-info-group__title_arrow"}
                url={"https://yandex.ru/maps/-/CDusqVP6"}
            >
                Адрес
            </LinkOpener>
            <div className="pl-info-group__content">
                <div className="pl-promo-page-adress">
                    <span>М-Видео, м. Курская, Земляной вал 45.</span>
                    <div className="pl-promo-page-adress__img">
                    <img src={mapImg} alt="map" width={'100%'} height={'100%'}/>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default PromoAdress;
