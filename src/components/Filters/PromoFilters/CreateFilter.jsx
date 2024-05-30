import React, { useEffect, useState } from "react"
import PromoFilterWindow from "./PromoFilterWindow";
import { useDispatch, useSelector } from "react-redux";
import { setIsContentHidden } from "../../../store/slices/pageSlice/pageSlice";
import CreateFilterWindow from "./CreateFilterWindow";
import { useTranslate } from "../../../hooks/useTranslate";
import { useMetaData } from "../../../hooks/useMetaData";
import { setCreatePromoCats } from "../../../store/slices/createPromo/createPromoSlice";



const CreateFilter = ({
}) => {
    const { tr } = useTranslate()
    const { categories: activeCats }  = useSelector(state => state.filters)
    const { tagsData: iniTags }  = useSelector(state => state.iniData)
    const promoCats = useSelector(state => state.createPromo.promoCats)
    const { getCategoryNameById } = useMetaData()
    const [listVisible, setListVisible] = useState(false)
    const [pickedVar, setPickedVar] = useState(null)
    const dispatch = useDispatch()

    useEffect(() => {
        console.log(pickedVar)
    }, [pickedVar])

    const setPromoCats = (pickedCats) => {
        setPickedVar(pickedCats)
        dispatch(setCreatePromoCats(pickedCats))
    }
    const openFilterList = () => {
        setListVisible(true)
        dispatch(setIsContentHidden(true))
    }
    
    const closeWindow = () => {
        setListVisible(false)
        dispatch(setIsContentHidden(false))
    }

    return (
        <div className="cats-create" style={{width: '100%'}}>
            <div className={"firststep-create-promo__filter _filter" + (pickedVar !== null ? " _picked" : '')} onClick={openFilterList}>
                <svg width="17" height="14" viewBox="0 0 17 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.5 3.91667H16" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M1 3.91667H3.5" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M8.5 10.5832H1" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M16 10.5832H13.5" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M6 6V6C4.61917 6 3.5 4.88083 3.5 3.5V3.5C3.5 2.11917 4.61917 1 6 1V1C7.38083 1 8.5 2.11917 8.5 3.5V3.5C8.5 4.88083 7.38083 6 6 6Z" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M11 7.6665V7.6665C12.3808 7.6665 13.5 8.78567 13.5 10.1665V10.1665C13.5 11.5473 12.3808 12.6665 11 12.6665V12.6665C9.61917 12.6665 8.5 11.5473 8.5 10.1665V10.1665C8.5 8.78567 9.61917 7.6665 11 7.6665Z" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                {pickedVar !== null
                    ?
                        <>
                           <div><b>{pickedVar.cat !== 100 ? tr(getCategoryNameById(pickedVar.cat)) + " • " : "Просто дарю"}</b>{pickedVar.tags !== null && iniTags.map(tag => (
                                pickedVar.tags.includes(tag) && tr(tag.name) + " • "
                           ))}</div>
                           {pickedVar.tags_left !== 0 &&
                            <div className="promo-create-filter-more">еще {pickedVar.tags_left}</div>
                           }
                        </>
                    :
                    <>
                        {tr('Выберите раздел и категории')}
                    </>
                }
            </div>
            <CreateFilterWindow 
                visible={listVisible}
                closeWindow={closeWindow}
                filtersHandler={setPromoCats}
            />
        </div>
    )
};

export default CreateFilter;
