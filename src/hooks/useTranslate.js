import { useSelector } from 'react-redux'

const ruLocals = require('../langs/ru/ru.json')
const enLocals = require('../langs/en/en.json')

const langData = {
    ru: ruLocals,
    en: enLocals
}
export function useTranslate() {
    const langCode = useSelector(state => state.user.lang)

    const tr = (template) => {
        if (langData[langCode]) {
            if (langData[langCode][template]) {
                return langData[langCode][template]
            } else {
                return template
            }
        } 
        if (langData['en'][template]) {
            return langData['en'][template]
        }

        return template
    }

    return {
        tr
    }
}