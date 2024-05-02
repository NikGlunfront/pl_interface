import React, { useState } from "react"
import Star from "./Star";

const StarRating = ({
    initRating = null,
    disabled = false
}) => {
    const [rating, setRating] = useState(initRating)

    const handleStarChange = (rate) => {
        setRating(rate)
    }

    return (
        <div className={"pl-star-rate" + (disabled ? ' pl-star-rate_disabled' : '')}>
            {[...Array(5).keys()].map(num => (
                <Star rate={num + 1} isActive={rating >= num + 1 && !disabled ? true : false} key={num} handleStarChange={handleStarChange} />
            ))}

        </div>
    )
};

export default StarRating;
