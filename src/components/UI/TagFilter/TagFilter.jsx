import React from 'react';

const TagFilter = ({
    filterValue,
    name,
    icon = null,
    changeActiveTag,
    activeTag,
    customDot,
    removeFunc = null,
    counter = 0
}) => {
    let className = 'pl-filter-tag '
    if (activeTag) {
        className += 'pl-filter-tag_active '
    }
    if (filterValue == "activated") {
        className += 'pl-filter-tag_green '
    }
    if (customDot) {
        className += 'pl-filter-tag_custom '
    }
    if (icon !== null) {
        className += ' pl-filter-tag_with_icon'
    }

    if (counter) {
        className += ' pl-filter-tag_with_counter'
    }

    const handleFilterClick = () => {
        changeActiveTag(filterValue)
    }
    return (
        <div className={className} data-counter={counter}>
            {icon
                ?   <img src={icon} alt="" />
                :   <></>
            }
            <div onClick={handleFilterClick}>{name}</div>
            {removeFunc !== null
                ?
                <div className='pl-filter-tag__removebtn' onClick={removeFunc}></div>
                :
                <></>
            }
        </div>
    );
};

export default TagFilter;