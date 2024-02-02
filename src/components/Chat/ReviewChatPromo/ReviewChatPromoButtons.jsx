import React from "react"
import StarRating from "../../UI/StarRating/StarRating";

const ReviewChatPromoButtons = ({
    reviewed = false
}) => {

    return (
        <div className="review-list-item__acts">
            <StarRating initRating={4} />
            <div className="review-list-item__btns">
                {reviewed 
                    ? ""
                    : <button className="review-list-item__makereview">Оставить отзыв</button>
                }
                <div className="review-list-item__btn review-list-item__btn_chat" ></div>
            </div>
        </div>
    )
};

export default ReviewChatPromoButtons;
