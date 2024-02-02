import React from "react"
import PiMessage from "../PlMessage/PlMessage";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setChatMeta } from "../../../store/slices/pageSlice/pageSlice";
import ReviewChatPromoButtons from "./ReviewChatPromoButtons";

const ReviewChatPromo = ({
    promoId,
    brandId,
    brandName,
    brandImg
}) => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const goToChat = () => {
        let chatMeta = {
            brandId: brandId,
            brandName: brandName,
            brandImg: brandImg,
            promoId: promoId
        }
        dispatch(setChatMeta(chatMeta))
        navigate(`/chat/review/${brandId}/${promoId}`)
    }
    
    let lastMessage
    let reviewd
    if (brandId === 1) {
        lastMessage = {msg_id: 15, from: brandName, timestamp: '16:54', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam cum deleniti totam suscipit cupiditate excepturi', is_read: true}
        reviewd = true
    } 
    if (brandId === 2) {
        lastMessage = {msg_id: 9, from: 'user', timestamp: '16:06', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam cum deleniti totam suscipit cupiditate excepturi', is_read: true}
        reviewd = false
    } 
    if (brandId === 3) {
        lastMessage = {msg_id: 13, from: 'user', timestamp: '16:34', text: 'Lorem ipsum dolor sit amet consectetur', is_read: true}
        reviewd = true
    } 


    return (
        <div className="review-list-item">
            <div onClick={goToChat}>
                <PiMessage
                    fromUser={lastMessage.from === brandName ? false : true}
                    name={lastMessage.from === brandName ? "Ответ" : 'Отзыв'}
                    text={lastMessage.text}
                    timestamp={lastMessage.timestamp}
                    isRead={lastMessage.is_read}
                    key={lastMessage.msg_id}
                />
            </div>
            <ReviewChatPromoButtons reviewed={reviewd} />
        </div>
    )
};

export default ReviewChatPromo;
