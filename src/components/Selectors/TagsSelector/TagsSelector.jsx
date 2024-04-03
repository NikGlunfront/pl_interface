import React, { useEffect, useState } from "react"
import TagsSelectorWindow from "./TagsSelectorWindow";
import { useTranslate } from "../../../hooks/useTranslate";
import { setIsContentHidden } from "../../../store/slices/pageSlice/pageSlice";
import { useDispatch, useSelector } from "react-redux";
import { useMetaData } from "../../../hooks/useMetaData";

const TagsSelector = ({
    handleSelectorData
}) => {
    const { tr } = useTranslate()
    const dispatch = useDispatch()
    const { getTagNameById } = useMetaData()
    const {tagsData: allTagsList} = useSelector(state => state.iniData)
    const { tags: tagsState } = useSelector(state => state.createPromo)
    const [listVisible, setListVisible] = useState(false)
    const [listSelected, setListSelected] = useState([])

    const openFilterList = () => {
        setListVisible(true)
        dispatch(setIsContentHidden(true))
    }

    const handleCallbackSelector = (id) => {
        if (listSelected.indexOf(id) !== -1) {
            setListSelected(listSelected.filter(item => item !== id))
        } else {
            setListSelected([...listSelected, id])
        }
    }

    useEffect(() => {
        if (tagsState.length > 0 ) {
            setListSelected([...tagsState])
        }
    }, [])

    useEffect(() => {
        handleSelectorData(listSelected)
    }, [listSelected])

    const closeList = () => {
        setListVisible(false)
        dispatch(setIsContentHidden(false))
    }

    return (
        <div className="firststep-create-promo__city">
            <div className="firststep-create-promo__filter _tags" onClick={openFilterList}>
                <div>
                    {listSelected.length === 0 
                        ? 
                        tr('Tags') 
                        : 
                        <>
                            ({listSelected.length})
                            {
                                listSelected.map((tagId, index) => (
                                    <span key={tagId}> {tr(getTagNameById(tagId))} {index === listSelected.length - 1 ? "" : ", "}</span>
                                ))
                            }
                        </>
                    }
                </div>
            </div>
            <TagsSelectorWindow 
                closeList={closeList}
                listVisible={listVisible}
                updateList={handleCallbackSelector}
                tags={allTagsList}
                activeTags={listSelected}
            />
        </div>
    )
};

export default TagsSelector;
