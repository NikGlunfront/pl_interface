import React from "react"
import { useTelegram } from "../../hooks/useTelegram";

const CreatePromo = ({
    
}) => {
    const {tg} = useTelegram();

    const handleAlertBtn = () => {
        tg.showAlert('Какое-то предупреждение (только кнопка Ок). \nМожет подойти для каких то уведомлений пользователя о/после каких-либо действий')
    }

    const handlePopup = () => {
        tg.showPopup({
            title: 'Заголовок',
            message: 'Текст сообщения внутри popup',
            buttons: [
                {type: 'close', text: 'close'},
                {type: 'destructive', text: 'delete'},
                {type: 'ok', text: 'ok'},
            ]
        })
    }

    const handleConfirmation = () => {
        tg.showConfirm('Окно подтверждения чего либо с двумя кнопками.')
    }

    // const handleScanQR = () => {
    //     tg.showScanQrPopup('Сканируйте QR клиента')
    // }

    const getClipBoardText = () => {
        tg.readTextFromClipboard()
    }
    

    return (
        <div className={'pl-page-container pl-page-create-promo'}>
            <div className="testbtn" style={{position: "static"}} onClick={handleAlertBtn}>alert</div>
            <div className="testbtn" style={{position: "static"}} onClick={handlePopup}>popup</div>
            <div className="testbtn" style={{position: "static"}} onClick={handleConfirmation}>confirmation</div>
            <div className="testbtn" style={{position: "static"}} onClick={getClipBoardText}>clipboardText</div>
            {/* <div className="testbtn" onClick={handleScanQR}>QR scan</div> */}
            {/* <div className="testbtn" onClick={handleLinkUrl}>clipboardText</div> */}
        </div>
    )
};

export default CreatePromo;
