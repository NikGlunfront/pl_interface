import React, { useEffect, useState } from 'react';
import SpinLoader from '../../../UI/SpinLoader/SpinLoader';
import Toggler from '../../../UI/Input/Toggler';
import AccountPromoStatItem from './AccountPromoStatItem';
import AccountPromoGlobalStat from './AccountPromoGlobalStat';
import AccountPromoStatsGroup from './AccountPromoStatsGroup';

const statsList = [
    {id: 1, country_id: 2, city_id: 1, isActive: true, acts: {views: 3, scs: 5, request: 12, wish: 63, not_interest: 3, blocked: 4, ticket: 0}},
    {id: 2, country_id: 1, city_id: 2, isActive: true, acts: {views: 3, scs: 5, request: 12, wish: 63, not_interest: 3, blocked: 4, ticket: 1}},
    {id: 3, country_id: 1, city_id: 3, isActive: false, acts: {views: 3, scs: 5, request: 12, wish: 63, not_interest: 3, blocked: 4, ticket: 0}},
    {id: 4, country_id: 3, city_id: 4, isActive: true, acts: {views: 3, scs: 5, request: 12, wish: 63, not_interest: 3, blocked: 4, ticket: 0}},
    {id: 5, country_id: 2, city_id: 5, isActive: false, acts: {views: 3, scs: 5, request: 12, wish: 63, not_interest: 3, blocked: 4, ticket: 0}},
    {id: 6, country_id: 2, city_id: 6, isActive: true, acts: {views: 3, scs: 5, request: 12, wish: 63, not_interest: 3, blocked: 4, ticket: 1}},
    {id: 7, country_id: 1, city_id: 7, isActive: true, acts: {views: 3, scs: 5, request: 12, wish: 63, not_interest: 3, blocked: 4, ticket: 1}},
    {id: 8, country_id: 1, city_id: 8, isActive: false, acts: {views: 3, scs: 5, request: 12, wish: 63, not_interest: 3, blocked: 4, ticket: 0}},
    {id: 9, country_id: 1, city_id: 9, isActive: true, acts: {views: 3, scs: 5, request: 12, wish: 63, not_interest: 3, blocked: 4, ticket: 0}},
    {id: 10, country_id: 1, city_id: 10, isActive: false, acts: {views: 3, scs: 5, request: 12, wish: 63, not_interest: 3, blocked: 4, ticket: 0}},
    {id: 11, country_id: 1, city_id: 11, isActive: true, acts: {views: 3, scs: 5, request: 12, wish: 63, not_interest: 3, blocked: 4, ticket: 1}},
    {id: 12, country_id: 2, city_id: 6, isActive: true, acts: {views: 3, scs: 5, request: 12, wish: 63, not_interest: 3, blocked: 4, ticket: 1}},
    {id: 13, country_id: 2, city_id: 7, isActive: true, acts: {views: 3, scs: 5, request: 12, wish: 63, not_interest: 3, blocked: 4, ticket: 1}},
    {id: 14, country_id: 2, city_id: 8, isActive: false, acts: {views: 3, scs: 5, request: 12, wish: 63, not_interest: 3, blocked: 4, ticket: 0}},
    {id: 15, country_id: 2, city_id: 9, isActive: true, acts: {views: 3, scs: 5, request: 12, wish: 63, not_interest: 3, blocked: 4, ticket: 0}},
    {id: 16, country_id: 2, city_id: 10, isActive: false, acts: {views: 3, scs: 5, request: 12, wish: 63, not_interest: 3, blocked: 4, ticket: 0}},
    {id: 17, country_id: 2, city_id: 11, isActive: true, acts: {views: 3, scs: 5, request: 12, wish: 63, not_interest: 3, blocked: 4, ticket: 1}},
    {id: 18, country_id: 2, city_id: 7, isActive: true, acts: {views: 3, scs: 5, request: 12, wish: 63, not_interest: 3, blocked: 4, ticket: 1}},
    {id: 19, country_id: 2, city_id: 8, isActive: false, acts: {views: 3, scs: 5, request: 12, wish: 63, not_interest: 3, blocked: 4, ticket: 0}},
    {id: 20, country_id: 2, city_id: 9, isActive: true, acts: {views: 3, scs: 5, request: 12, wish: 63, not_interest: 3, blocked: 4, ticket: 0}},
    {id: 21, country_id: 2, city_id: 10, isActive: false, acts: {views: 3, scs: 5, request: 12, wish: 63, not_interest: 3, blocked: 4, ticket: 0}},
    {id: 22, country_id: 2, city_id: 11, isActive: true, acts: {views: 3, scs: 5, request: 12, wish: 63, not_interest: 3, blocked: 4, ticket: 1}},
]

const countryIds = [1, 2, 3]

const AccountPromoStats = ({

}) => {
    const [isLoading, setIsLoading] = useState(false)
    const [statsData, setStatsData] = useState(null)

    useEffect(() => {
        setTimeout(() => {
            setStatsData(statsList)
        }, 300);
    }, [])

    return (
        <div className='account-promo-stats'>
            <AccountPromoGlobalStat statsList={statsList} />
            {statsData !== null && statsData.length > 0
                ?
                countryIds.map(countryId => (
                    <AccountPromoStatsGroup 
                        statsList={statsList.filter(statItem => statItem.country_id === countryId)}
                        countryId={countryId}
                        key={countryId}
                    />
                ))
                :
                <SpinLoader />
            }
        </div>
    );
};

export default AccountPromoStats;