import React from "react"

const CityTopper = ({
    
}) => {

    return (
        <div>
            <div className="filters-pl-select__search">
                <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M13.1875 7.09375C13.1875 10.4594 10.4594 13.1875 7.09375 13.1875C3.72813 13.1875 1 10.4594 1 7.09375C1 3.72813 3.72813 1 7.09375 1C10.4594 1 13.1875 3.72813 13.1875 7.09375Z" stroke="black" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12.25 12.25L16 16" stroke="black" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <input 
                    type="text" 
                    placeholder="Поиск города" 
                    value={searchQ} 
                    onChange={onChangeSearch} 
                />
            </div>
        </div>
    )
};

export default CityTopper;
