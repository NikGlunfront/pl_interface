import React, { useEffect, useState } from "react"
import PromoFilterWindow from "./PromoFilterWindow";
import { useDispatch, useSelector } from "react-redux";
import { setIsContentHidden } from "../../../store/slices/pageSlice/pageSlice";



const PromoFilter = ({
}) => {
    const { tags: activeTags}  = useSelector(state => state.filters)
    const { categories: activeCats }  = useSelector(state => state.filters)
    const { tags: iniTags }  = useSelector(state => state.iniData)
    const [listVisible, setListVisible] = useState(false)
    const [tagsApplied, setTagsApplied] = useState(false)
    const dispatch = useDispatch()

    useEffect(() => {
        let isApplied = false
        if (!activeCats) {
            return
        }
        for (let i = 0; i < activeCats.length; i++) {
            let catId = activeCats[i]
            if (activeTags[catId] !== iniTags[catId]) {
                isApplied = true
            }
        }
        if (isApplied) {
            setTagsApplied(true)
        } else {
            setTagsApplied(false)
        }
    }, [activeTags])

    const openFilterList = () => {
        setListVisible(true)
        dispatch(setIsContentHidden(true))
    }
    
    const closeWindow = () => {
        setListVisible(false)
        dispatch(setIsContentHidden(false))
    }

    return (
        <div className="">
            <div className={"pl-promo-filters__btn " + (tagsApplied ? 'pl-promo-filters__btn_applied' : '')} onClick={openFilterList}></div>
            <PromoFilterWindow 
                visible={listVisible}
                closeWindow={closeWindow}
            />
        </div>
    )
};

export default PromoFilter;
