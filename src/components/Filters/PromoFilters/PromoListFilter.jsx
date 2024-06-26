import React, { useEffect, useState } from 'react';
import TagFilter from '../../UI/TagFilter/TagFilter';
import PromoFilter from './PromoFilter';
import { useDispatch, useSelector } from 'react-redux';
import { setActiveCategoryTag } from '../../../store/slices/filters/filtersSlice';
import { useTranslate } from '../../../hooks/useTranslate';
import PromoFilterWindow from './PromoFilterWindow';
import { setIsContentHidden, setVisibilityMainSort } from '../../../store/slices/pageSlice/pageSlice';

const PromoListFilter = ({
    toggleContentVisibility
}) => {
    const { tr } = useTranslate()
    const active_filters = useSelector(state => state.filters)
    const initData = useSelector(state => state.iniData)
    const { isVisibleMainSort } = useSelector(state => state.pageMeta)
    const dispatch = useDispatch()
    const [choosenCats, setChoosenCats] = useState([])

    useEffect(() => {
        let initCategoryTagValue = active_filters.activeCategoryTag !== null ? active_filters.activeCategoryTag : 0
        dispatch(setActiveCategoryTag(initCategoryTagValue))
    }, [])

    useEffect(() => {
        if (active_filters.categories?.length) {
            setChoosenCats(initData.categories.filter(cat => active_filters.categories.includes(cat.id)))
        }
    }, [active_filters])

    const handleNewTagFilter = (tagValue) => {
        dispatch(setActiveCategoryTag(tagValue))
    }

    const closeWindow = () => {
        dispatch(setVisibilityMainSort(false))
        dispatch(setIsContentHidden(false))
    }
    
    return (
        <>
            <PromoFilterWindow 
                visible={isVisibleMainSort}
                closeWindow={closeWindow}
            />
        
        <div className='pl-promo-filters'>
            <PromoFilter />
            <div className="pl-promo-filters__row no-scroll-visual">
                <TagFilter 
                    name={tr('TagFilter.Categories.All')}
                    filterValue={0} 
                    key={'all'} 
                    changeActiveTag={handleNewTagFilter} 
                    activeTag={active_filters.activeCategoryTag === 0} 
                />
                <TagFilter 
                    name={tr('Просто дарю')}
                    filterValue={9999} 
                    key={'free'} 
                    changeActiveTag={handleNewTagFilter} 
                    activeTag={active_filters.activeCategoryTag === 9999} 
                />
                {choosenCats.length > 0 && choosenCats.map(cat => (
                    <TagFilter
                        name={tr(cat.name)} 
                        filterValue={cat.id} 
                        key={cat.id} 
                        changeActiveTag={handleNewTagFilter} 
                        activeTag={active_filters.activeCategoryTag === cat.id} 
                        customDot={active_filters.tags[cat.id] !== initData.tags[cat.id]}
                    />
                ))}
            </div>
        </div>
        </>
    );
};

export default PromoListFilter;