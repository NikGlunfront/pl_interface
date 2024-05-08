import React, { useEffect, useState } from 'react';
import { useTranslate } from '../../hooks/useTranslate';

const FixedPromoTopper = ({
    promoName = '',
    topScrollPosition = 350,
    promoPreview,
    partnerImg
}) => {
    const [isVisible, setIsVisible] = useState(false)
    const { tr } = useTranslate()

    const listenToScroll = () => {
        const topScroll = document.querySelector('#root').scrollTop
        if (topScroll >=  topScrollPosition && !isVisible) {
            setIsVisible(true)
        } else {
            setIsVisible(false)
        }
    }

    useEffect(() => {
        document.querySelector('#root').addEventListener("scroll", listenToScroll);

        return () => document.querySelector('#root').removeEventListener("scroll", listenToScroll); 
    }, [])


    if (promoName === '' || topScrollPosition === null) {
        return
    }

    return (
        <div className={'fixed-promo-topper' + (isVisible ? " _visible" : '')}>
            <div className="fixed-promo-topper__name"><img src={partnerImg} alt='' /><span>{promoName}</span></div>
            <div className="fixed-promo-topper__btn">
                <button className="pl-promo__getgift">{tr('Button.GetGift')}</button>
            </div>
        </div>
    );
};

export default FixedPromoTopper;