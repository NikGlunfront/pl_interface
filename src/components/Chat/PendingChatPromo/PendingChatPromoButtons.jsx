import React from "react"

const PendingChatPromoButtons = ({
    
}) => {

    return (
        <div className="pending-order-list-item__acts">
            <span>3455673754</span>
            <div 
                className="pending-order-list-item__btn pending-order-list-item__btn_delete"
            ></div>
            <div 
                className="pending-order-list-item__btn pending-order-list-item__btn_compose"
            ></div>
            <div 
                className="pending-order-list-item__btn pending-order-list-item__btn_upload"
            ></div>
            <div 
                className="pending-order-list-item__btn pending-order-list-item__btn_chat"
            ></div>
        </div>
    )
};

export default PendingChatPromoButtons;
