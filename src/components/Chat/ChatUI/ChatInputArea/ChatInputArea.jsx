import React, { useEffect, useState } from "react"
import MediaLoader from "../../../UI/MediaLoader/MediaLoader";

const ChatInputArea = ({
    sendMessage
}) => {
    const [inputText, setInputText] = useState('')
    const [imgPreview, setImgPreview] = useState(null)

    const handleInputChange = (e) => {
        setInputText(e.target.value)
    }

    const getCurrentTime = () => {
        let today = new Date();
        let minutes = today.getMinutes()
        minutes = minutes > 0 ? minutes : `0${minutes}`
        let time = today.getHours() + ":" + minutes;
        return time
    }

    useEffect(() => {
        console.log(imgPreview)
    }, [imgPreview])

    const getPreviewImg = (img) => {
        setImgPreview(img)
    }

    const sendMessageClick = () => {
        if (inputText.trim().length === 0) {
            return
        }
        let msg = {
            from: 'user',
            timestamp: getCurrentTime(),
            text: inputText,
            is_read: false,
            image: imgPreview !== null ? URL.createObjectURL(imgPreview) : null
        }
        sendMessage(msg)
        setInputText('')
        setImgPreview(null)
    }


    return (
        <div className="pl-page-chat__inputarea input-area-chat">
            <MediaLoader getPreview={getPreviewImg} className={'input-area-chat__attach'} />
            <div className="input-area-chat__input">
                <input 
                    type="text" 
                    placeholder="Сообщение..."
                    value={inputText}
                    onChange={handleInputChange}
                    onKeyDown={e => e.key === 'Enter' ? sendMessageClick(): ''}
                />
            </div>
            <div className="input-area-chat__send">
                <button 
                    onClick={sendMessageClick}
                >
                </button>
            </div>
        </div>
    )
};

export default ChatInputArea;
