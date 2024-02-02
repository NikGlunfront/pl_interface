import React, { useState } from "react"
import Star from "./Star";

const StarRating = ({
    initRating = null
}) => {
    const [rating, setRating] = useState(initRating)

    const handleStarChange = (rate) => {
        setRating(rate)
    }

    return (
        <div className="pl-star-rate">
            {[...Array(5).keys()].map(num => (
                <Star rate={num + 1} isActive={rating >= num + 1 ? true : false} key={num} handleStarChange={handleStarChange} />
            ))}

        </div>
    )
};

export default StarRating;
