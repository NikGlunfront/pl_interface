import facebookIco from '../assets/img/icons/facebook-ico.svg'
import facebookIcoWhite from '../assets/img/icons/facebook-ico_white.svg'
import websiteIco from '../assets/img/icons/www-ico.svg'
import websiteIcoWhite from '../assets/img/icons/www-ico_white.svg'
import whatsappIco from '../assets/img/icons/whatsapp-ico.svg'
import whatsappWhite from '../assets/img/icons/whatsapp-ico_white.svg'
import instagramIco from '../assets/img/icons/insta-ico.svg'
import instagramIcoWhite from '../assets/img/icons/insta-ico_white.svg'
import phoneIco from '../assets/img/icons/phone-ico.svg'
import phoneIcoWhite from '../assets/img/icons/phone-ico_white.svg'
import telegramIco from '../assets/img/icons/tg-ico.svg'
import telegramIcoWhite from '../assets/img/icons/tg-ico_white.svg'
import emailIco from '../assets/img/icons/email-ico.svg'
import emailIcoWhite from '../assets/img/icons/email-ico_white.svg'
import noImage from '../assets/img/icons/service/no_image.svg'
import noImageWhite from '../assets/img/icons/service/no_image_white.svg'
import plus from '../assets/img/icons/plus.svg'
import plusWhite from '../assets/img/icons/plus_white.svg'
import ruLang from '../assets/img/icons/langs/ru.svg'
import enLang from '../assets/img/icons/langs/en.svg'
import hiLang from '../assets/img/icons/langs/hi.svg'
import actionDelete from '../assets/img/icons/actions/delete_ico.svg'
import actionEdit from '../assets/img/icons/actions/edit_ico.svg'
import actionDrag from '../assets/img/icons/actions/drag_ico.svg'
import actionDeleteWhite from '../assets/img/icons/actions/delete_ico_white.svg'
import actionEditWhite from '../assets/img/icons/actions/edit_ico_white.svg'
import actionDragWhite from '../assets/img/icons/actions/drag_ico_white.svg'
import waitingWhite from '../assets/img/icons/actions/waiting_white.svg'
import waiting from '../assets/img/icons/actions/waiting.svg'
import confirmedWhite from '../assets/img/icons/actions/confirmed_white.svg'
import confirmed from '../assets/img/icons/actions/confirmed.svg'
import { useSelector } from 'react-redux'

export function useIcons() {
    const isDarkTheme = useSelector(state => state.pageMeta.darkTheme)
    const iconsObj = {
        'phone': isDarkTheme ? phoneIcoWhite : phoneIco,
        'tg': isDarkTheme ? telegramIcoWhite : telegramIco,
        'email': isDarkTheme ? emailIcoWhite : emailIco,
        'instagram': isDarkTheme ? instagramIcoWhite : instagramIco,
        'website': isDarkTheme ? websiteIcoWhite : websiteIco,
        'facebook': isDarkTheme ? facebookIcoWhite : facebookIco,
        'whatsapp': isDarkTheme ? whatsappWhite : whatsappIco,
        'noimage': isDarkTheme ? noImageWhite : noImage,
        'plus': isDarkTheme ? plusWhite : plus,
        'edit': isDarkTheme ? actionEditWhite : actionEdit,
        'delete': isDarkTheme ? actionDeleteWhite : actionDelete,
        'drag': isDarkTheme ? actionDragWhite : actionDrag,
        'lang-ru': ruLang,
        'lang-th': hiLang,
        'lang-hi': hiLang,
        'lang-en': enLang,
        'waiting': isDarkTheme ? waitingWhite : waiting,
        'confirmed': isDarkTheme ? confirmedWhite : confirmed,
        'waiting_reverse': isDarkTheme ? waiting : waitingWhite,
        'confirmed_reverse': isDarkTheme ? confirmed : confirmedWhite,
    }

    const getIcon = (iconName) => {
        return iconsObj[iconName]
    }
    return {
        getIcon
    }
}