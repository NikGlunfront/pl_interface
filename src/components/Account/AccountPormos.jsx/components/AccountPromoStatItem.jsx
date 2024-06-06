import React, { useEffect, useState } from 'react';
import Toggler from '../../../UI/Input/Toggler';
import { useMetaData } from '../../../../hooks/useMetaData';
import { useTranslate } from '../../../../hooks/useTranslate';

const AccountPromoStatItem = ({
    statData = null
}) => {
    const { tr } = useTranslate()
    const {getCityName} = useMetaData()
    const [isActive, setIsActive] = useState(false)

    useEffect(() => {
        setIsActive(statData.isActive)
    }, [statData])

    const handleChangeActivity = ( val ) => {
        setIsActive(val)
    }

    if (statData === null || !statData?.city_id) {
        return
    }
    return (
        <div className={"item-promo-stats" + (isActive ? "" : ' _disabled')}>
            <div className="item-promo-stats__topper">
                <div className="item-promo-stats__city">
                    <span>{tr(getCityName(statData.city_id))}</span>
                    Московская область
                </div>
                <Toggler 
                    value={isActive}
                    onChange={handleChangeActivity}
                />
            </div>
            <div className="list-item__info pl-moderate-promo__info">
                <div className="list-item__interacts">
                    <div className="list-item__num list-item__num_views">{statData.acts.views}</div>
                    <div className="pl-moderate-promo__interact pl-moderate-promo__interact_4">
                        <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="0.5" y="0.5" width="10" height="10" rx="1.5" stroke="black"/>
                        <path d="M8 3L4.88995 8L3 5.77778" stroke="black" strokeLinecap="square"/>
                        </svg>
                        {statData.acts.request}
                    </div>
                    <div className="list-item__num list-item__num_gifts">{statData.acts.scs}</div>
                    <div className={"list-item__num list-item__num_wishes " + (statData?.acts.wish > 0 ? "list-item__num_wishes_full" : "")}>{statData.acts.wish}</div>
                    <div className="pl-moderate-promo__interact pl-moderate-promo__interact_5">
                        <svg width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6.02247 0.538457C6.16806 0.0694177 6.83194 0.0694189 6.97753 0.538459L8.0204 3.89831C8.08606 4.10984 8.28305 4.25297 8.50452 4.25005L12.0222 4.20363C12.5133 4.19715 12.7184 4.82853 12.3173 5.11194L9.44418 7.14202C9.26329 7.26983 9.18804 7.50142 9.25926 7.71114L10.3904 11.0423C10.5483 11.5073 10.0113 11.8976 9.61778 11.6037L6.7992 9.49848C6.62175 9.36594 6.37825 9.36594 6.2008 9.49848L3.38222 11.6037C2.98874 11.8976 2.45165 11.5073 2.60957 11.0423L3.74074 7.71114C3.81196 7.50142 3.73671 7.26983 3.55582 7.14202L0.682673 5.11194C0.281578 4.82853 0.486729 4.19715 0.977801 4.20363L4.49548 4.25005C4.71695 4.25297 4.91394 4.10984 4.9796 3.89831L6.02247 0.538457Z" fill="#F7AC2A"/>
                        </svg>

                        {4.9}
                    </div>
                </div>
                <div className="list-item__interacts">
                    {statData.acts.not_interest !== 0 && <div className="pl-moderate-promo__interact pl-moderate-promo__interact_1">{statData.acts.not_interest}</div>}
                    {statData.acts.blocked !== 0 && <div className="pl-moderate-promo__interact pl-moderate-promo__interact_2">{statData.acts.blocked}</div>}
                    {statData.acts.ticket !== 0 && <div className="pl-moderate-promo__interact pl-moderate-promo__interact_3">{statData.acts.ticket}</div>}
                </div>
            </div>
        </div>
    );
};

export default AccountPromoStatItem;