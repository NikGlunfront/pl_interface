import React, { useEffect } from "react"

const DoubleNameInput = ({
    onClickHandler,
    name,
    id,
    subname,
    amount
}) => {

    if (amount === 0) return true;
    
    let className = 'pl-input-doublename '
    const handleClick = () => {
        onClickHandler(id)
    }

    return (
        <div className={className} onClick={handleClick}>
            <div className="pl-input-doublename__text">
                <span>{name}</span>
                <span>{subname}</span>
            </div>
            {amount
                ? <div className="pl-input-doublename__num">{amount}</div>
                : ""
            }
        </div>
    )
};

export default DoubleNameInput;
