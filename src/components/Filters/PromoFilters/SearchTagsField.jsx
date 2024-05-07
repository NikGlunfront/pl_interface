import React, { useEffect, useState } from "react"
import Checkbox from "../../UI/Input/Checkbox";
import { useDispatch, useSelector } from "react-redux";
import { setActiveTags } from "../../../store/slices/filters/filtersSlice";
import { useTranslate } from "../../../hooks/useTranslate";

const SearchTagsField = ({
    tagsData,
    tagsDataNums,
    openedCat,

}) => {
    const { tr } = useTranslate()
    const tagsState = useSelector(state => state.filters.tags)
    const tagsIniState = useSelector(state => state.iniData.tags)
    const tagsDataIni = useSelector(state => state.iniData.tagsData)
    const [currentTags, setCurrentTags] = useState([])
    const [pickedTags, setPickedTags] = useState([])
    const dispatch = useDispatch()
    
    useEffect(() => {
        if (openedCat) {
            setCurrentTags(tagsData[openedCat])
            console.log(tagsData[openedCat])
            let newPickedState = []
            if (tagsIniState[openedCat] !== tagsState[openedCat]) {
                newPickedState = [...tagsState[openedCat]]
            }
            setPickedTags(newPickedState)
        } else {
            setCurrentTags(Object.values(tagsDataIni))
        }
    }, [openedCat])

    useEffect(() => {
        if (!openedCat || !tagsData) {
            return
        }
        if (pickedTags.length === 0) {
            dispatch(setActiveTags({
                ...tagsState,
                [openedCat]: tagsData[openedCat]
            }))
        } else {
            dispatch(setActiveTags({
                ...tagsState,
                [openedCat]: pickedTags
            }))
        }
    }, [pickedTags])
 
    const addTag = (id) => {
        setPickedTags([...pickedTags, id])
    }
    const removeTag = (id) => {
        setPickedTags(pickedTags.filter(cat => cat !== id))
    }

    const toggleTag = (id) => {
        if (pickedTags.indexOf(id) != -1) {
            removeTag(id)
        } else {
            addTag(id)
        }
    }

    return (
        <div className="filters-pl-select__filters">
            {currentTags.length > 0 && tagsDataIni.filter(tag => currentTags.includes(tag.id)).map(tag => (
                <Checkbox 
                    name={tr(tag.name)} 
                    id={tag.id}
                    isChecked={pickedTags.indexOf(tag.id) != -1 ? true : false}
                    // amount={tagsDataNums.filter(item => item.id == cat.id)[0].amount}
                    amount={50}
                    toggleFunc={toggleTag}
                    key={tag.id}
                />
            ))}
        </div>
    )
};

export default SearchTagsField;