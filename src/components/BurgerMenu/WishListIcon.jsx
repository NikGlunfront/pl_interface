import React from "react"
import { useSelector } from "react-redux";

const WishListIcon = ({
    
}) => {
    const { darkTheme: isDarkTheme, pageNotifications: nums } = useSelector(state => state.pageMeta)

    return (
        <div className="pl-burger-list__icon">
            <svg width="27" height="24" viewBox="0 0 27 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M13.5002 23C13.5002 23 4.20527 16.9717 1.65386 11.1942C-1.75493 3.47767 9.05784 -3.563 13.5002 4.73351C17.9426 -3.563 28.7539 3.47767 25.3466 11.1942C22.7952 16.9717 13.5002 23 13.5002 23Z" stroke={isDarkTheme ? "#78779A" : "black"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span>{nums.wishlist}</span>
        </div>
    )
};

export default WishListIcon;
