import React from "react"
import FancyGalleryItem from "../../UI/Gallery/FancyGalleryItem"

const PiMessage = ({
    fromUser = false,
    name = '',
    text = '',
    timestamp = '',
    isRead = false,
    img = null
}) => {

    return (
        <div className={"pl-chat-message " + (fromUser ? "pl-chat-message_from_user " : "") + (isRead ? "pl-chat-message_is_read " : "")}>
            {name !== '' 
                ? <span className="pl-chat-message__title">{name}</span>
                : ''
            }
            {img !== null
                ? <FancyGalleryItem src={img} />
                : ''
            }
            <div className="pl-chat-message__inner">
                <div className="pl-chat-message__text">{text}</div>
            </div>
            <div className="pl-chat-message__timestamp">{timestamp}</div>
            <svg width="16" height="19" viewBox="0 0 16 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.54253 0L0.000593185 10.5C4.1522 17.0327 3.30126 18.1403 15.875 18.5C5.85416 13 9.15866 11.5 7.54253 0Z" fill="#E3FFCA"/>
            </svg>
        </div>
    )
};

export default PiMessage;
