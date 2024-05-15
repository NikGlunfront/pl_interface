const tg = window.Telegram.WebApp;

export function useTelegram() {

    const onClose = () => {
        tg.close()
    }
    
    const onToggleButton = () => {
        if (tg.MainButton.isVisible) {
            tg.MainButton.hide()
        } else {
            tg.MainButton.show()
        }
    }

    const sendDataToBot = (data) => {
        tg.sendData(data)
    }

    const sendAlert = (text) => {
        if (tg.initDataUnsafe?.user) {
            tg.showAlert(text)
        } else {
            alert(text)
        }
    }

    const requestContact = () => {
        tg.requestContact()
    }

    return {
        onClose,
        onToggleButton,
        sendDataToBot,
        sendAlert,
        requestContact,
        tg,
        user: tg.initDataUnsafe?.user,
        queryId: tg.initDataUnsafe?.query_id
    }
}