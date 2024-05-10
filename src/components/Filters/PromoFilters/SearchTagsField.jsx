import React, { useEffect, useState } from "react"
import Checkbox from "../../UI/Input/Checkbox";
import { useDispatch, useSelector } from "react-redux";
import { setActiveTags } from "../../../store/slices/filters/filtersSlice";
import { useTranslate } from "../../../hooks/useTranslate";
import { useMetaData } from "../../../hooks/useMetaData";

const SearchTagsField = ({
    tagsData,
    tagsDataNums,
    openedCat,
    searchQ = ""
}) => {
    const { tr } = useTranslate()
    const { getCategoryNameById } = useMetaData()
    const tagsState = useSelector(state => state.filters.tags)
    const tagsIniState = useSelector(state => state.iniData.tags)
    const tagsDataIni = useSelector(state => state.iniData.tagsData)
    const [currentTags, setCurrentTags] = useState([])
    const [pickedTags, setPickedTags] = useState([])
    const [displayedList, setDisplayedList] = useState([])
    const dispatch = useDispatch()
    
    useEffect(() => {
        if (openedCat && tagsState) {
            setCurrentTags(tagsData[openedCat])
            let newPickedState = []
            if (tagsIniState[openedCat] !== tagsState[openedCat]) {
                newPickedState = [...tagsState[openedCat]]
            }
            setPickedTags(newPickedState)
            setDisplayedList(tagsDataIni.filter(tag => tagsData[openedCat].includes(tag.id)))
        } else {
            if (openedCat === 0) {
                let allCurrentTagsArray = [];
                Object.keys(tagsData).forEach(tagKey => {
                    allCurrentTagsArray = [...allCurrentTagsArray, ...tagsData[tagKey]]
                })
                let newPickedState = []
                if (tagsIniState[openedCat] !== tagsState[openedCat]) {
                    newPickedState = [...tagsState[openedCat]]
                }
                setPickedTags(newPickedState)
                setCurrentTags(allCurrentTagsArray)
                setDisplayedList(tagsDataIni.filter(tag =>allCurrentTagsArray.includes(tag.id)))
            }
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

    useEffect(() => {
        if (searchQ !== '') {
            setDisplayedList(tagsDataIni.filter(tag => currentTags.includes(tag.id) && (tr(tag.name).toLowerCase().includes(searchQ.toLowerCase()) || tr(getCategoryNameById(tag.cat_id)).toLowerCase().includes(searchQ.toLowerCase()))))
        } else {
            setDisplayedList(tagsDataIni.filter(tag => currentTags.includes(tag.id)))
        }
    }, [searchQ])
 
    const addTag = (id) => {
        setPickedTags([...pickedTags, id])
    }
    const removeTag = (id) => {
        setPickedTags(pickedTags.filter(cat => cat !== id))
    }

    const toggleTag = (id) => {
        console.log(pickedTags)
        if (pickedTags.indexOf(id) != -1) {
            removeTag(id)
        } else {
            addTag(id)
        }
    }

    if (!currentTags) {
        return
    }

    return (
        <div className="filters-pl-select__filters">
            {currentTags.length > 0 && displayedList.map(tag => (
                <Checkbox 
                    name={tr(tag.name)} 
                    id={tag.id}
                    isChecked={pickedTags.indexOf(tag.id) !== -1 ? true : false}
                    // amount={tagsDataNums.filter(item => item.id == cat.id)[0].amount}
                    amount={50}
                    toggleFunc={toggleTag}
                    subName={tr(getCategoryNameById(tag.cat_id))}
                    key={tag.id}
                />
            ))}
            {displayedList.length === 0
                ?
                <div className="no-results">{tr('Search.Result.Noresults')}</div>
                :
                <></>
            }
        </div>
    )
};

export default SearchTagsField;