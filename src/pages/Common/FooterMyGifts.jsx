import React from 'react';
import { useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';

const FooterMyGifts = () => {
    const location = useLocation()
    const { darkTheme: isDarkTheme, pageNotifications: nums } = useSelector(state => state.pageMeta)
    return (
        <Link
            className={
                "pl-app-footer__numlink pl-app-footer__numlink_gifts " 
                + (location.pathname === '/my-gifts' ? 'pl-app-footer__numlink_gifts_onpage ' : '')
            }
            to={'/my-gifts'}
        >
            {isDarkTheme 
                ?
                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26" fill="none">
                    <path fillRule="evenodd" clipRule="evenodd" d="M25 14.3332H1V10.3332C1 8.85984 2.19333 7.6665 3.66666 7.6665H22.3333C23.8066 7.6665 25 8.85984 25 10.3332V14.3332Z" stroke="#78779A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path fillRule="evenodd" clipRule="evenodd" d="M19.6663 24.9997H6.333C4.12367 24.9997 2.33301 23.209 2.33301 20.9997V14.333H23.6663V20.9997C23.6663 23.209 21.8756 24.9997 19.6663 24.9997Z" stroke="#78779A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M13 7C13 7 13 13 13 14.3335" stroke="#78779A" strokeWidth="2" strokeLinecap="square" strokeLinejoin="round"/>
                    <path fillRule="evenodd" clipRule="evenodd" d="M13 7.66638C13 7.66638 14.4613 2.70506 17.0187 1.41439C19.8653 -0.0229408 22.6107 2.53972 19.8653 5.10372C18.492 6.38505 15.7467 7.66638 13 7.66638Z" stroke="#78779A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path fillRule="evenodd" clipRule="evenodd" d="M12.9999 7.66638C12.9999 7.66638 11.5386 2.70506 8.98128 1.41439C6.13462 -0.0229408 3.38929 2.53972 6.13462 5.10372C7.50795 6.38505 10.2533 7.66638 12.9999 7.66638Z" stroke="#78779A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                :
                <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M25 14.3327H1V10.3327C1 8.85935 2.19333 7.66602 3.66666 7.66602H22.3333C23.8066 7.66602 25 8.85935 25 10.3327V14.3327Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path fillRule="evenodd" clipRule="evenodd" d="M19.6653 24.9997H6.33203C4.1227 24.9997 2.33203 23.209 2.33203 20.9997V14.333H23.6653V20.9997C23.6653 23.209 21.8747 24.9997 19.6653 24.9997Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M13 7C13 7 13 13 13 14.3335" stroke="black" strokeWidth="2" strokeLinecap="square" strokeLinejoin="round"/>
                    <path fillRule="evenodd" clipRule="evenodd" d="M13 7.66638C13 7.66638 14.4613 2.70506 17.0187 1.41439C19.8653 -0.0229408 22.6107 2.53972 19.8653 5.10372C18.492 6.38505 15.7467 7.66638 13 7.66638Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path fillRule="evenodd" clipRule="evenodd" d="M12.9999 7.66638C12.9999 7.66638 11.5386 2.70506 8.98128 1.41439C6.13462 -0.0229408 3.38929 2.53972 6.13462 5.10372C7.50795 6.38505 10.2533 7.66638 12.9999 7.66638Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>


            }
            <div>Мои подарки</div>
            <span>{nums.gifts}</span>
        </Link>
    );
};

export default FooterMyGifts;