import React from "react"
import { Link, useLocation } from "react-router-dom";
import FooterWishlist from "./FooterWishlist";
import FooterMyGifts from "./FooterMyGifts";
import FooterCreatePromo from "./FooterCreatePromo";

const Footer = ({
    
}) => {
    const location = useLocation()

    if (location.pathname === '/create-partner' || location.pathname === '/create-promo') {
        return
    }

    return (
        <footer className='pl-app-footer'>
            <div className="pl-app-footer__inner">
                <FooterWishlist />
                <FooterCreatePromo />
                <FooterMyGifts />
            </div>
        </footer>
    )
};

export default Footer;
