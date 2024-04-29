import React from 'react';

const TagFilter = ({
    filterValue,
    name,
    icon = null,
    changeActiveTag,
    activeTag,
    customDot
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

    const handleFilterClick = () => {
        changeActiveTag(filterValue)
    }
    return (
        <div className={className} onClick={handleFilterClick}>
            {icon
                ?   <img src={icon} alt="" />
                :   <></>
            }
            {name}
        </div>
    );
};

export default TagFilter;