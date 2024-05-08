import React from "react"
import PiMessage from "../PlMessage/PlMessage";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setChatMeta } from "../../../store/slices/pageSlice/pageSlice";
import PendingChatPromoButtons from "./PendingChatPromoButtons";

const PendingChatPromo = ({
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
        navigate(`/chat/${brandId}/${promoId}`)
    }
    
    let lastMessage
    if (brandId === 1) {
        lastMessage = {msg_id: 15, from: brandName, timestamp: '16:54', text: 'Lorem ipsum 😀 dolor sit amet consectetur adipisicing elit. Aliquam cum deleniti totam suscipit cupiditate excepturi', is_read: true}
    } 
    if (brandId === 2) {
        lastMessage = {msg_id: 9, from: 'user', timestamp: '16:06', text: 'Lorem ipsum 😆 dolor sit amet consectetur adipisicing elit. Aliquam cum deleniti totam suscipit cupiditate excepturi', is_read: true}
    } 
    if (brandId === 3) {
        lastMessage = {msg_id: 13, from: 'user', timestamp: '16:34', text: 'Lorem ipsum 👌 dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur. Ultrices nisi mauris imperdiet nulla ultricies nunc ...', is_read: true}
    } 


    return (
        <div className="pending-order-list-item">
            <div onClick={goToChat} className="pending-order-list-item__content">
                <div className="pending-order-list-item__icon">
                    <img src={brandImg} alt="" />
                </div>
                <div className="pending-order-list-item__body">
                    <div className="pending-order-list-item__company">{brandName}</div>
                    <div className="pending-order-list-item__text">{lastMessage.text}</div>
                    <div className="pending-order-list-item__date">20.04</div>
                    <div className="pending-order-list-item__notifications">1</div>
                </div>
                
            </div>
            {/* <PendingChatPromoButtons /> */}
        </div>
    )
};

export default PendingChatPromo;
