import React from "react"
import { Link, useLocation } from "react-router-dom";
import FooterWishlist from "./FooterWishlist";
import FooterMyGifts from "./FooterMyGifts";
import FooterCreatePromo from "./FooterCreatePromo";
import { useSelector } from "react-redux";

const Footer = ({
    
}) => {
    const location = useLocation()
    const pageMeta = useSelector(state => state.pageMeta)

    if (location.pathname === '/create-partner' || location.pathname === '/create-promo') {
        return
    }

    return (
        <footer className={'pl-app-footer ' + (pageMeta.isContentHidden && "_hidden_content")}>
            <div className="pl-app-footer__inner">
                <FooterWishlist />
                <FooterCreatePromo />
                <FooterMyGifts />
            </div>
        </footer>
    )
};

export default Footer;
