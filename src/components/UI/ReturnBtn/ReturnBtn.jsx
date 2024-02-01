import React from 'react';
import { useSelector } from 'react-redux';

const ReturnBtn = ({
    onClickFunc,
    className
}) => {
    const { darkTheme: isDarkTheme } = useSelector(state => state.pageMeta)
    return (
        <div className={className} onClick={onClickFunc}>
            <svg width="4" height="8" viewBox="0 0 4 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2.45318 3.52858L0 0.666588L0.571371 0L4 4L3.71431 4.33329L0.571371 8L0 7.33341L2.45318 4.47142L2.79387 4L2.45318 3.52858Z" fill={isDarkTheme ? 'white' : 'black'}/>
            </svg>
        </div>
    );
};

export default ReturnBtn;