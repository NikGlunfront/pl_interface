import React, { useEffect, useState } from "react"
import { setIsContentHidden } from "../../../store/slices/pageSlice/pageSlice";
import { useTranslate } from "../../../hooks/useTranslate";
import { useDispatch, useSelector } from "react-redux";
import { useMetaData } from "../../../hooks/useMetaData";
import CategorySelectorWindow from "./CategorySelectorWindow";

const CategorySelector = ({
    callbackCategory,
    withIcon,
    stateData
}) => {
    const { tr } = useTranslate()
    const dispatch = useDispatch()
    const { getCategoryNameById } = useMetaData()
    const {categories: allCategoriesList} = useSelector(state => state.iniData)
    const [listVisible, setListVisible] = useState(false)
    const [listSelected, setListSelected] = useState([])

    useEffect(() => {
        if (stateData.length > 0) {
            setListSelected([...stateData])
        }
    }, [stateData])
    useEffect(() => {
        callbackCategory(listSelected)
    }, [listSelected])

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

    const closeList = () => {
        setListVisible(false)
        dispatch(setIsContentHidden(false))
    }

    return (
        <div className={"firststep-create-promo__city" + (withIcon ? " _with_icon_cat" : "")}>
            <div className="firststep-create-promo__filter _tags" onClick={openFilterList}>
                <div className="selector-icon">
                    {listSelected.length === 0 
                        ? 
                        tr('Categories') 
                        : 
                        <>
                            ({listSelected.length})
                            {
                                listSelected.map((catId, index) => (
                                    <span key={catId}> {tr(getCategoryNameById(catId))} {index === listSelected.length - 1 ? "" : ", "}</span>
                                ))
                            }
                        </>
                    }
                </div>
            </div>
            <CategorySelectorWindow
                closeList={closeList}
                listVisible={listVisible}
                updateList={handleCallbackSelector}
                categories={allCategoriesList}
                activeCategories={listSelected}
            />
        </div>
    )
};

export default CategorySelector;
