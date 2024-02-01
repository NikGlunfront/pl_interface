import React, { useState } from "react"

const PromoLike = ({
    
}) => {
    
    const [isLiked, setIsLiked] = useState(false)
    const handleLikeClick = () => {
        setIsLiked(!isLiked)
    }

    return (
        <div className={"list-item__likes " + (isLiked ? 'list-item__likes_liked' : '')} onClick={handleLikeClick}></div>
    )
};

export default PromoLike;
