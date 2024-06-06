import React from 'react';
import TagFilter from '../../UI/TagFilter/TagFilter';
import { useTranslate } from '../../../hooks/useTranslate';
import giftIco from '../../../assets/img/icons/account/nav/gifts.svg'
import franchiseIco from '../../../assets/img/icons/account/nav/franchise.svg'
import requestIco from '../../../assets/img/icons/account/nav/requests.svg'
import appealIco from '../../../assets/img/icons/account/nav/appeal.svg'
import historyIco from '../../../assets/img/icons/account/nav/history.svg'
import reviewIco from '../../../assets/img/icons/account/nav/review.svg'
import giftIcoW from '../../../assets/img/icons/account/nav/gifts_w.svg'
import franchiseIcoW from '../../../assets/img/icons/account/nav/franchise_w.svg'
import requestIcoW from '../../../assets/img/icons/account/nav/requests_w.svg'
import historyIcoW from '../../../assets/img/icons/account/nav/history_w.svg'
import reviewIcoW from '../../../assets/img/icons/account/nav/review_w.svg'

const AccountNav = ({
    currentContentId
}) => {
    const { tr } = useTranslate()

    const headerNavItems = [
        {id: 1, name: 'Франшиза', icon: franchiseIco, activeIcon: franchiseIcoW},
        {id: 2, name: 'Подарки', icon: giftIco, activeIcon: giftIcoW},
        {id: 3, name: 'Заявки', icon: requestIco, activeIcon: requestIcoW},
        {id: 4, name: 'Отзывы', icon: reviewIco, activeIcon: reviewIcoW},
        {id: 5, name: 'Жалобы', icon: appealIco, activeIcon: appealIco},
        {id: 6, name: 'История', icon: historyIco, activeIcon: historyIcoW},
    ]

    return (
        <div className='nav-account'>
            <div className="nav-account__settings">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M18.589 7.232L16.589 3.768L13.103 4.27L11.795 1H7.795L6.487 4.27L3 3.768L1 7.232L3.179 10L1 12.768L3 16.232L6.487 15.73L7.543 18.371C7.695 18.751 8.063 19 8.472 19H11.118C11.527 19 11.894 18.751 12.046 18.371L13.103 15.73L16.589 16.232L18.589 12.768L16.411 10L18.589 7.232Z" stroke="black" strokeLinecap="round" strokeLinejoin="round"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M12.7949 10C12.7949 11.657 11.4519 13 9.79492 13C8.13792 13 6.79492 11.657 6.79492 10C6.79492 8.343 8.13792 7 9.79492 7C11.4519 7 12.7949 8.343 12.7949 10Z" stroke="black" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            </div>
            {headerNavItems.map(item => (
                <TagFilter 
                    name={tr(item.name)}
                    filterValue={item.id} 
                    key={item.id} 
                    changeActiveTag={() => {}} 
                    activeTag={currentContentId === item.id}
                    icon={currentContentId === item.id ? item.activeIcon : item.icon} 
                    
                />
            ))}
        </div>
    );
};

export default AccountNav;