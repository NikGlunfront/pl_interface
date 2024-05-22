import React, { useEffect, useRef, useState } from 'react';
import StarRating from '../../UI/StarRating/StarRating';
import megafonImg from '../../../assets/img/icons/partners/citilink_logo.jpg'
import userImg from '../../../assets/img/promos/b03ee6ee4b2047eb3f833e3dfbb42265.jpg'
import { register } from 'swiper/element/bundle'
import { useTranslate } from '../../../hooks/useTranslate';
import Modal from '../../UI/Modal/Modal';

const ReviewMessageSlider = ({
    userReview = null,
    companyReply = null,
    userName = null
}) => {
    const swiperRef = useRef(null)
    const { tr } = useTranslate()
    const [isModalActive, setIsModalActive] = useState(false)

    useEffect(() => {
        if (!swiperRef.current) {
            return
        }
        register()
        const params = {
            speed: 300,
            // loop: true,
            slidesPerView: 1.1,
            spaceBetween: 0
        }
        Object.assign(swiperRef.current, params)

        swiperRef.current.initialize()
    }, [swiperRef, userReview, companyReply])

    if (userReview === null) {
        return
    }
    
    return (
        <>
        <Modal
            className={'reviews-popup'}
            isActive={isModalActive}
            setActive={setIsModalActive}
        >
            <div className="reviews-popup__review">
                <div className="review-message review-message_short">
                    <div className="review-message__content">
                        <div className="review-message__user">
                            <img src={userImg} alt="" />
                            <div className="review-message__name">{userName === null ? tr('Review.Message.YourReview') : userName}</div>
                        </div>
                        <div className="review-message__rate">
                            <StarRating initRating={4} />
                        </div>
                        <div className="review-message__text">
                            Lorem ipsum dolor sit amet consectetur. Integer gravida pretium elit facilisis viverra ac condimentum commodo placerat.  Lorem ipsum dolor sit amet consectetur. Integer gravida pretium elit facilisis viverra ac condimentum commodo placerat. 
                        </div>
                        <div className="review-message__time">
                            <span>14:34</span>
                            <div>
                                <svg width="13" height="7" viewBox="0 0 13 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M3.12555 6.50034L0 3.4191L0.781386 2.64879L3.12555 4.95972L8.15658 0L8.93796 0.77031L3.12555 6.50034Z" fill="#979797"/>
                                    <path d="M7.18729 6.50034L5.6875 4.95972L6.46889 4.18941L7.18729 4.95972L12.2183 0L12.9997 0.77031L7.18729 6.50034Z" fill="#979797"/>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {companyReply !== null
                ?
                <div className="reviews-popup__review">
                    <div className="review-message review-message_short review-message_reply">
                        <div className="review-message__content">
                            <div className="review-message__user">
                                <img src={megafonImg} alt="" />
                                <div className="review-message__name">{tr('Review.Message.Reply')}</div>
                            </div>
                            <div className="review-message__rate">
                                <StarRating initRating={4} />
                            </div>
                            <div className="review-message__text">
                                Lorem ipsum dolor sit amet consectetur. Integer gravida pretium elit facilisis viverra ac condimentum commodo placerat.  Lorem ipsum dolor sit amet consectetur. Integer gravida pretium elit facilisis viverra ac condimentum commodo placerat. 
                            </div>
                            <div className="review-message__time">
                                <span>14:34</span>
                                <div>
                                    <svg width="13" height="7" viewBox="0 0 13 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M3.12555 6.50034L0 3.4191L0.781386 2.64879L3.12555 4.95972L8.15658 0L8.93796 0.77031L3.12555 6.50034Z" fill="#979797"/>
                                        <path d="M7.18729 6.50034L5.6875 4.95972L6.46889 4.18941L7.18729 4.95972L12.2183 0L12.9997 0.77031L7.18729 6.50034Z" fill="#979797"/>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                :
                <></>
            }
        </Modal>
        <div className={"review-slider" + (companyReply !== null ? " review-slider_big" : "")} onClick={() => setIsModalActive(true)}>
            {companyReply !== null
                ?
                <swiper-container init="false" ref={swiperRef}>
                    <swiper-slide key={'review_user'}>
                        <div className="review-message review-message_short">
                            <div className="review-message__content">
                                <div className="review-message__user">
                                    <img src={userImg} alt="" />
                                    <div className="review-message__name">{userName === null ? tr('Review.Message.YourReview') : userName}</div>
                                </div>
                                <div className="review-message__rate">
                                    <StarRating initRating={4} />
                                </div>
                                <div className="review-message__text">
                                    Lorem ipsum dolor sit amet consectetur. Integer gravida pretium elit facilisis viverra ac condimentum commodo placerat.  Lorem ipsum dolor sit amet consectetur. Integer gravida pretium elit facilisis viverra ac condimentum commodo placerat. 
                                </div>
                                <div className="review-message__time">
                                    <span>14:34</span>
                                    <div>
                                        <svg width="13" height="7" viewBox="0 0 13 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M3.12555 6.50034L0 3.4191L0.781386 2.64879L3.12555 4.95972L8.15658 0L8.93796 0.77031L3.12555 6.50034Z" fill="#979797"/>
                                            <path d="M7.18729 6.50034L5.6875 4.95972L6.46889 4.18941L7.18729 4.95972L12.2183 0L12.9997 0.77031L7.18729 6.50034Z" fill="#979797"/>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </swiper-slide>
                    <swiper-slide key={'review_reply'}>
                        <div className="review-message review-message_short review-message_reply">
                            <div className="review-message__content">
                                <div className="review-message__user">
                                    <img src={megafonImg} alt="" />
                                    <div className="review-message__name">{tr('Review.Message.Reply')}</div>
                                </div>
                                <div className="review-message__rate">
                                    <StarRating initRating={4} />
                                </div>
                                <div className="review-message__text">
                                    Lorem ipsum dolor sit amet consectetur. Integer gravida pretium elit facilisis viverra ac condimentum commodo placerat.  Lorem ipsum dolor sit amet consectetur. Integer gravida pretium elit facilisis viverra ac condimentum commodo placerat. 
                                </div>
                                <div className="review-message__time">
                                    <span>14:34</span>
                                    <div>
                                        <svg width="13" height="7" viewBox="0 0 13 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M3.12555 6.50034L0 3.4191L0.781386 2.64879L3.12555 4.95972L8.15658 0L8.93796 0.77031L3.12555 6.50034Z" fill="#979797"/>
                                            <path d="M7.18729 6.50034L5.6875 4.95972L6.46889 4.18941L7.18729 4.95972L12.2183 0L12.9997 0.77031L7.18729 6.50034Z" fill="#979797"/>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </swiper-slide>

                </swiper-container>
                :
                <div className="review-message">
                    <div className="review-message__content">
                        <div className="review-message__user">
                            <img src={userImg} alt="" />
                            <div className="review-message__name">{userName === null ? tr('Review.Message.YourReview') : userName}</div>
                        </div>
                        <div className="review-message__rate">
                            <StarRating initRating={4} />
                        </div>
                        <div className="review-message__text">
                            Lorem ipsum dolor sit amet consectetur. Integer gravida pretium elit facilisis viverra ac condimentum commodo placerat.  Lorem ipsum dolor sit amet consectetur. Integer gravida pretium elit facilisis viverra ac condimentum commodo placerat. 
                        </div>
                        <div className="review-message__time">
                            <span>14:34</span>
                            <div>
                                <svg width="13" height="7" viewBox="0 0 13 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M3.12555 6.50034L0 3.4191L0.781386 2.64879L3.12555 4.95972L8.15658 0L8.93796 0.77031L3.12555 6.50034Z" fill="#979797"/>
                                    <path d="M7.18729 6.50034L5.6875 4.95972L6.46889 4.18941L7.18729 4.95972L12.2183 0L12.9997 0.77031L7.18729 6.50034Z" fill="#979797"/>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
                
            }
        </div>
        </>
    );
};

export default ReviewMessageSlider;