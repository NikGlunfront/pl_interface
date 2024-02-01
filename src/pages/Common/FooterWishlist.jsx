import React from 'react';
import { useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';

const FooterWishlist = () => {
    const location = useLocation()
    const { darkTheme: isDarkTheme, pageNotifications: nums } = useSelector(state => state.pageMeta)
    return (
        <Link
            className={
                "pl-app-footer__numlink pl-app-footer__numlink_wishlist " 
                + (location.pathname === '/wishlist' ? 'pl-app-footer__numlink_wishlist_onpage ' : '')
            }
            
            to={'/wishlist'}
        >
            {isDarkTheme 
                ?
                <svg xmlns="http://www.w3.org/2000/svg" width="27" height="24" viewBox="0 0 27 24" fill="none">
                    <path fillRule="evenodd" clipRule="evenodd" d="M13.5002 23C13.5002 23 4.20527 16.9717 1.65386 11.1942C-1.75493 3.47767 9.05784 -3.563 13.5002 4.73351C17.9426 -3.563 28.7539 3.47767 25.3466 11.1942C22.7952 16.9717 13.5002 23 13.5002 23Z" stroke="#78779A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                :
                <svg width="27" height="24" viewBox="0 0 27 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M13.5002 23C13.5002 23 4.20527 16.9717 1.65386 11.1942C-1.75493 3.47767 9.05784 -3.563 13.5002 4.73351C17.9426 -3.563 28.7539 3.47767 25.3466 11.1942C22.7952 16.9717 13.5002 23 13.5002 23Z" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>

            }
            <div>Избранное</div>
            <span>{nums.wishlist}</span>
        </Link>
    );
};

export default FooterWishlist;