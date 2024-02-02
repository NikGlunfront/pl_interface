import React, { useState } from "react"
import ChatInputField from "./ChatInputField";
import ChatMediaPreview from "./ChatMediaPreview";

const ChatInputArea = ({
    sendMessage
}) => {

    const [previewImgOnLoad, setPreviewImgOnLoad] = useState(null)
    const setPreview = (img) => {
        setPreviewImgOnLoad(img)
    }

    const resetImg = () => {
        setPreviewImgOnLoad(null)
    }

    return (
        <div className="chat-input-area">
            {previewImgOnLoad !== null
                ? <ChatMediaPreview previewImgObj={previewImgOnLoad} resetImgObj={resetImg} />
                : ""
            }
            <ChatInputField 
                sendMessage={sendMessage}
                getPreviewObj={setPreview}
            />
            
        </div>
    )
};

export default ChatInputArea;
