import React from "react"

const ChatMediaPreview = ({
    previewImgObj,
    resetImgObj
}) => {
    const resetImg = () => {
        resetImgObj()
    }

    return (
        <div className="input-area-chat__previewer">
            <img src={previewImgObj.img} alt="{previewImgObj.file_name}" />
            <span>{previewImgObj.file_name}</span>
            <button onClick={resetImg}>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15 8H1" stroke="white" stroke-linecap="round" stroke-linejoin="round"></path><path d="M8 15V1" stroke="white" stroke-linecap="round" stroke-linejoin="round"></path></svg>
            </button>
        </div>
    )
};

export default ChatMediaPreview;
