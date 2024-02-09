import React from "react"
import { useIcons } from "../../hooks/useIcons";
import { useDispatch, useSelector } from "react-redux";
import { setInterfaceLang } from "../../store/slices/user/userSlice";

const LangItem = ({
    icon,
    text,
    langCode
}) => {
    const { getIcon } = useIcons()
    const dispatch = useDispatch()
    const userLang = useSelector(state => state.user.lang)

    const handleLangChange = () => {
        dispatch(setInterfaceLang(langCode))
    }

    return (
        <div className={"pl-burger-langs__item " + (userLang === langCode ? "pl-burger-langs__item_active " : "")} onClick={handleLangChange}>
            <img src={getIcon(icon)} alt={text} />
            {text}
        </div>
    )
};

export default LangItem;
