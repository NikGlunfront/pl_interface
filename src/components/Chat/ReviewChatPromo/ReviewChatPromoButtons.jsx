import React from "react"
import StarRating from "../../UI/StarRating/StarRating";
import { useTranslate } from "../../../hooks/useTranslate";
import megafonImg from '../../../assets/img/icons/partners/megafon.png'

const ReviewChatPromoButtons = ({
    reviewed = false,
    lastMessages = []
}) => {
    const { tr } = useTranslate()

    return (
        <>
            {reviewed 
                ?
                    <div className="review-list-item__acts">
                        {tr('Review.MakeReview')}
                        <StarRating initRating={4} disabled={true}/>
                        {/* <div className="review-list-item__btns">
                            {reviewed 
                                ? ""
                                : <button className="review-list-item__makereview">Оставить отзыв</button>
                            }
                            <div className="review-list-item__btn review-list-item__btn_chat" ></div>
                        </div> */}
                    </div>

                :
                    <div className="review-message">
                        <div className="review-message__content">
                            <div className="review-message__user">
                                <img src={megafonImg} alt="" />
                                <div className="review-message__name">Ваш отзыв</div>
                            </div>
                            <div className="review-message__rate">
                                <StarRating initRating={4} />
                            </div>
                            <div className="review-message__text">
                                Lorem ipsum dolor sit amet consectetur. Integer gravida pretium elit facilisis viverra ac condimentum commodo placerat.  Lorem ipsum dolor sit amet consectetur. Integer gravida pretium elit facilisis viverra ac condimentum commodo placerat. 
                            </div>
                            <div className="review-message__time">
                                <span>14:34</span>
                                <div></div>
                            </div>
                        </div>
                    </div>
            }
        </>
    )
};

export default ReviewChatPromoButtons;
