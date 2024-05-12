import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useTranslate } from '../../hooks/useTranslate';

const GlobalSearch = ({
    isActive
}) => {
    const { tr } = useTranslate()
    const { darkTheme: isDarkTheme } = useSelector(state => state.pageMeta)
    const [searchQ, setSearchQ] = useState('')
    const [clearActive, setClearActive] = useState(false)

    const onChangeSearch = (e) => {
        setSearchQ(e.target.value)
    }

    const handleCloseClick = () => {
        // updateFilterData()
        setSearchQ('')
    }

    useEffect(() => {
        if (searchQ !== '') {
            // setVisibleFilters(cityData.filter(city => city.name.toLowerCase().includes(searchQ.toLowerCase())))
            setClearActive(true)
        } else {
            // setVisibleFilters(cityData)
            setClearActive(false)
        }
    }, [searchQ])

    const clearSearch = () => {
        setSearchQ('')
    }

    return (
        <div className="global-search-field">
            <div className="filters-pl-select__search">
                <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M13.1875 7.09375C13.1875 10.4594 10.4594 13.1875 7.09375 13.1875C3.72813 13.1875 1 10.4594 1 7.09375C1 3.72813 3.72813 1 7.09375 1C10.4594 1 13.1875 3.72813 13.1875 7.09375Z" stroke={isDarkTheme ? "white" : "black"} strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12.25 12.25L16 16" stroke={isDarkTheme ? "white" : "black"} strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <input 
                    type="text" 
                    placeholder={tr('Поиск')} 
                    value={searchQ} 
                    onChange={onChangeSearch} 
                />
                <div className={["search-clear " + (clearActive ? "search-clear_visible" : '')]} onClick={clearSearch}>
                    <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10 1.00011L1 10M10 9.99989L1 1" stroke={isDarkTheme ? "white" : "black"} strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </div>
            </div>
        </div>
    );
};

export default GlobalSearch;