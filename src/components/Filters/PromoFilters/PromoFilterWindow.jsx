import React, { useEffect, useState } from "react"
import FilterWindow from "../../UI/SmartSelect/FilterWindow";
import SmartButton from "../../UI/SmartButton/SmartButton";
import TagFilter from "../../UI/TagFilter/TagFilter";
import { useDispatch, useSelector } from "react-redux";
import SearchTagsField from "./SearchTagsField";
import { setActiveTags } from "../../../store/slices/filters/filtersSlice";
import { useTranslate } from "../../../hooks/useTranslate";

const PromoFilterWindow = ({
    visible,
    closeWindow
}) => {
    const { tr } = useTranslate()
    const active_filters = useSelector(state => state.filters)
    const initData = useSelector(state => state.iniData)
    const pageMeta = useSelector(state => state.pageMeta)
    const [choosenCats, setChoosenCats] = useState([])
    const [catOpened, setCatOpened] = useState(null)
    const [clearActive, setClearActive] = useState(true)
    const [searchQ, setSearchQ] = useState('')
    const dispatch = useDispatch()

    useEffect(() => {
        if (active_filters.categories?.length) {
            setChoosenCats(initData.categories.filter(cat => active_filters.categories.includes(cat.id)))
            if (catOpened === null) {
                setCatOpened(active_filters.categories[0])
            }
        }
    }, [active_filters])

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
        let resetObj = {}
        for (let i = 0; i < active_filters.categories.length; i++) {
            const cat = active_filters.categories[i];
            resetObj[cat] = initData.tags[cat]
        }
        dispatch(setActiveTags(resetObj))
        closeWindow()
    }

    return (
        <FilterWindow visible={visible}>
            <div className="pl-return-toppanel">
                <div className="pl-return-toppanel__return" onClick={closeList}>
                    <svg width="4" height="8" viewBox="0 0 4 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2.45318 3.52858L0 0.666588L0.571371 0L4 4L3.71431 4.33329L0.571371 8L0 7.33341L2.45318 4.47142L2.79387 4L2.45318 3.52858Z" fill={pageMeta.darkTheme ? "white" : "black"} />
                    </svg>
                </div>
                <div className="pl-return-toppanel__title">{tr('Search.Title.SearchSettings')}</div>
                <div className="pl-reset-filters" onClick={handleResetFilters}>{tr('Reset')}</div>
            </div>
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
            <div className="filters-pl-select__tags">
                {choosenCats.length > 0 && choosenCats.map(cat => (
                    <TagFilter 
                        name={cat.name} 
                        filterValue={cat.id} 
                        key={cat.id} 
                        changeActiveTag={handleNewTagFilter} 
                        activeTag={catOpened === cat.id}
                        customDot={active_filters.tags[cat.id] !== initData.tags[cat.id]} 
                    />
                ))}
                <div className="filter-pl-select__tags_more">{tr('More')} 23</div>
            </div>
            <SearchTagsField 
                tagsData={initData.tags}
                tagsDataNums={initData.tagsNums}
                openedCat={catOpened}
            />
            <div className="filters-pl-select__bottom">
                <SmartButton color="red" number={300}>
                    {tr('Button.ShowGifts')}
                </SmartButton>
            </div>
        </FilterWindow>
    )
};

export default PromoFilterWindow;
