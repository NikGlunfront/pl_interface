import React, { useEffect, useState } from "react"
import { useLocation } from "react-router-dom";

const PromoLike = ({
    
}) => {
    const location = useLocation()    
    const [isLiked, setIsLiked] = useState(false)
    const handleLikeClick = () => {
        setIsLiked(!isLiked)
    }
    useEffect(() => {
        if (location.pathname.includes('wishlist')) {
            setIsLiked(true)
        }
    }, [])

    return (
        <div className={"list-item__likes " + (isLiked ? 'list-item__likes_liked' : '')} onClick={handleLikeClick}></div>
    )
};

export default PromoLike;
