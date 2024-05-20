import React, { useEffect, useState } from "react"
import FilterWindow from "../../UI/SmartSelect/FilterWindow";
import SmartButton from "../../UI/SmartButton/SmartButton";
import TagFilter from "../../UI/TagFilter/TagFilter";
import { useDispatch, useSelector } from "react-redux";
import SearchTagsField from "./SearchTagsField";
import { setActiveTags } from "../../../store/slices/filters/filtersSlice";
import { useTranslate } from "../../../hooks/useTranslate";
import Checkbox from "../../UI/Input/Checkbox";
import { useMetaData } from "../../../hooks/useMetaData";

const CreateFilterWindow = ({
    visible,
    closeWindow
}) => {
    const { tr } = useTranslate()
    const active_filters = useSelector(state => state.filters)
    const initData = useSelector(state => state.iniData)
    const pageMeta = useSelector(state => state.pageMeta)
    const { getCategoryNameById } = useMetaData()
    const [choosenCats, setChoosenCats] = useState([])
    const [catOpened, setCatOpened] = useState(null)
    const [clearActive, setClearActive] = useState(true)
    const [currentTags, setCurrentTags] = useState([])
    const [searchQ, setSearchQ] = useState('')
    const [displayedList, setDisplayedList] = useState([])
    const dispatch = useDispatch()

    useEffect(() => {
        setChoosenCats(initData.categories)
        setCatOpened(1)
    }, [])

    useEffect(() => {
        if (searchQ !== '') {
            setDisplayedList(initData.tagsData.filter(tag => (tr(tag.name).toLowerCase().includes(searchQ.toLowerCase()) || tr(getCategoryNameById(tag.cat_id)).toLowerCase().includes(searchQ.toLowerCase()))))
        } else {
            setDisplayedList(initData.tagsData)
        }
    }, [searchQ])

    useEffect(() => {
        // if (catOpened) {
            
        //     setDisplayedList(initData.tagsData.filter(tag => initData.tagsData[catOpened].includes(tag.id)))
        // } else {
        //     if (catOpened === 0) {
        //         let allCurrentTagsArray = [];
        //         Object.keys(initData.tagsData).forEach(tagKey => {
        //             allCurrentTagsArray = [...allCurrentTagsArray, ...initData.tagsData[tagKey]]
        //         })
        //         setDisplayedList(initData.tagsData.filter(tag =>allCurrentTagsArray.includes(tag.id)))
        //     }
        // }
    }, [catOpened])

    const handleNewTagFilter = (tagValue) => {
        setCatOpened(tagValue)
    }

    const closeList = () => {
        closeWindow()
    }

    const clearSearch = () => {
        setSearchQ('')
    }

    const onChangeSearch = (e) => {
        setSearchQ(e.target.value)
    }

    const handleResetFilters = () => {
        // let resetObj = {}
        // for (let i = 0; i < active_filters.categories.length; i++) {
        //     const cat = active_filters.categories[i];
        //     resetObj[cat] = initData.tags[cat]
        // }
        // dispatch(setActiveTags(resetObj))
        // setCatOpened(0)
        // closeWindow()
    }

    const removeTagFilter = (id) => {
        console.log(`FilterCat: ${id}`)
    }

    return (
        <FilterWindow visible={visible}>
            <div className="pl-return-toppanel">
                <div className="pl-return-toppanel__return" onClick={closeList}>
                    <svg width="4" height="8" viewBox="0 0 4 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2.45318 3.52858L0 0.666588L0.571371 0L4 4L3.71431 4.33329L0.571371 8L0 7.33341L2.45318 4.47142L2.79387 4L2.45318 3.52858Z" fill={pageMeta.darkTheme ? "white" : "black"} />
                    </svg>
                </div>
                <div className="pl-return-toppanel__title">{tr('Разделы и категории')}</div>
                {/* <div className="pl-reset-filters" onClick={handleResetFilters}>{tr('Reset')}</div> */}
            </div>
            
            <div className="filters-pl-select__tags">
                <TagFilter 
                    name={tr('TagFilter.Categories.All')}
                    filterValue={0} 
                    key={'all'} 
                    changeActiveTag={handleNewTagFilter} 
                    activeTag={catOpened === 0} 
                />
                {choosenCats.length > 0 && choosenCats.map(cat => (
                    <TagFilter
                        name={tr(cat.name)} 
                        filterValue={cat.id} 
                        key={cat.id} 
                        changeActiveTag={handleNewTagFilter} 
                        activeTag={catOpened === cat.id}
                        customDot={false} 
                        // removeFunc={removeTagFilter}
                    />
                ))}
            </div>
            {/* <div className="filter-pl-select__tags_more">{tr('More')} 23</div> */}
            <div className="filters-pl-select__search">
                <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M13.1875 7.09375C13.1875 10.4594 10.4594 13.1875 7.09375 13.1875C3.72813 13.1875 1 10.4594 1 7.09375C1 3.72813 3.72813 1 7.09375 1C10.4594 1 13.1875 3.72813 13.1875 7.09375Z" stroke={pageMeta.darkTheme ? "white" : "black"} strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12.25 12.25L16 16" stroke={pageMeta.darkTheme ? "white" : "black"} strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <input 
                    type="text" 
                    placeholder={tr('Search.Placeholder.Tags')} 
                    value={searchQ} 
                    onChange={onChangeSearch} 
                />
                <div className={["search-clear " + (clearActive ? "search-clear_visible" : '')]} onClick={clearSearch}>
                    <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10 1.00011L1 10M10 9.99989L1 1" stroke="black" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </div>
            </div>
            <div className="filters-pl-select__filters">
                {displayedList.length > 0 && displayedList.map(tag => (
                    <Checkbox 
                        name={tr(tag.name)} 
                        id={tag.id}
                        isChecked={false}
                        // amount={tagsDataNums.filter(item => item.id == cat.id)[0].amount}
                        amount={50}
                        toggleFunc={() => {}}
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
            <div className="filters-pl-select__bottom">
                <SmartButton color="red" number={300}>
                    {tr('Button.ShowGifts')}
                </SmartButton>
            </div>
        </FilterWindow>
    )
};

export default CreateFilterWindow;
