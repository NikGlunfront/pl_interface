import React, { useState } from "react"
import StarRating from "../../UI/StarRating/StarRating";
import { useTranslate } from "../../../hooks/useTranslate";
import megafonImg from '../../../assets/img/icons/partners/megafon.png'
import userImg from '../../../assets/img/promos/b03ee6ee4b2047eb3f833e3dfbb42265.jpg'
import ReviewMessageSlider from "./ReviewMessageSlider";
import Modal from "../../UI/Modal/Modal";
import TextArea from "../../UI/Input/TextArea";

const ReviewChatPromoButtons = ({
    reviewed = false,
    lastMessages = []
}) => {
    const { tr } = useTranslate()
    const [isModalActive, setIsModalActive] = useState(false)
    const [reviewText, setReviewText] = useState('')

    return (
        <>
            {reviewed 
                ?
                    <>
                        <div className="review-list-item__acts" onClick={() => setIsModalActive(true)}>
                            {tr('Review.MakeReview')}
                            <StarRating initRating={0} disabled={true}/>
                        </div>
                        <Modal
                            className={'make-review-popup'}
                            isActive={isModalActive}
                            setActive={setIsModalActive}
                        >
                            <div className="make-review-popup__stars">
                                <StarRating initRating={5} />
                            </div>
                            <div className="make-review-popup__title">
                                <span>{tr('Review.Message.YourReview')}</span>
                                <img src={userImg} alt="" />
                            </div>
                            <div className="make-review-popup__input">
                                <TextArea 
                                    placeholder={'Ваш отзыв'}
                                    handleChange={setReviewText}
                                    iniValue={reviewText}
                                />
                            </div>
                            <div className="make-review-popup__btn">Сохранить</div>
                        </Modal>
                    </>

                :
                    <ReviewMessageSlider 
                        userReview={lastMessages.length > 0 ? lastMessages[0] : null} 
                        companyReply={lastMessages.length > 1 ? lastMessages[1] : null} 
                    />
            }
        </>
    )
};

export default ReviewChatPromoButtons;
