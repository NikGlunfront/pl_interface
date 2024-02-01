import React from 'react';

const TagFilter = ({
    filterValue,
    name,
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

    const handleFilterClick = () => {
        changeActiveTag(filterValue)
    }
    return (
        <div className={className} onClick={handleFilterClick}>
            {name}
        </div>
    );
};

export default TagFilter;