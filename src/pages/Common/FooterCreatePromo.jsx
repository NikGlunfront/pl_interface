import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const FooterCreatePromo = () => {
    const isDarkTheme = useSelector(state => state.pageMeta.darkTheme)
    return (
        <Link
            className="pl-app-footer__addpromo"
            to={'/create-partner'}
        >
            {isDarkTheme 
                ?
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15 8H1" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M8 15V1" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                :
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15 8H1" stroke="black" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M8 15V1" stroke="black" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            }
        </Link>
    );
};

export default FooterCreatePromo;