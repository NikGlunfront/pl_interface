import React, { useEffect, useState } from "react"
import PromoFilterWindow from "./PromoFilterWindow";
import { useDispatch, useSelector } from "react-redux";
import { setIsContentHidden } from "../../../store/slices/pageSlice/pageSlice";
import CreateFilterWindow from "./CreateFilterWindow";
import { useTranslate } from "../../../hooks/useTranslate";



const CreateFilter = ({
}) => {
    const { tr } = useTranslate()
    // const { tags: activeTags}  = useSelector(state => state.filters)
    const { categories: activeCats }  = useSelector(state => state.filters)
    const { tags: iniTags }  = useSelector(state => state.iniData)
    const [listVisible, setListVisible] = useState(false)
    const [tagsApplied, setTagsApplied] = useState(false)
    const dispatch = useDispatch()

    const openFilterList = () => {
        setListVisible(true)
        dispatch(setIsContentHidden(true))
    }
    
    const closeWindow = () => {
        setListVisible(false)
        dispatch(setIsContentHidden(false))
    }

    return (
        <div className="" style={{width: '100%'}}>
            <div className={"firststep-create-promo__filter" + (tagsApplied.length > 0 ? " _picked" : '')} onClick={openFilterList}>
                <svg width="14" height="17" viewBox="0 0 14 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M13 6.83333C13 11.8333 7 16 7 16C7 16 1 11.8333 1 6.83333C1 3.61167 3.68629 1 7 1C10.3137 1 13 3.61167 13 6.83333Z" stroke="#E10001" stroke-linecap="round" stroke-linejoin="round"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M9 7C9 8.105 8.105 9 7 9C5.895 9 5 8.105 5 7C5 5.895 5.895 5 7 5C8.105 5 9 5.895 9 7Z" stroke="#E10001" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                {tr('Выберите раздел и категории')}
            </div>
            <CreateFilterWindow 
                visible={listVisible}
                closeWindow={closeWindow}
            />
        </div>
    )
};

export default CreateFilter;
