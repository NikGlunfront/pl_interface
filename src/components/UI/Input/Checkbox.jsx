import React from "react"

const Checkbox = ({
    toggleFunc,
    name,
    id,
    isChecked,
    amount = 0
}) => {
    // if (amount === 0) return true;

    const onClickHandler = () => {
        toggleFunc(id)
    }

    let className = 'pl-input-checkbox '
    if (isChecked) {
        className += 'pl-input-checkbox_active'
    }
    return (
        <div className={className} onClick={onClickHandler}>
            <div className="pl-input-checkbox__checkbox"><span></span></div>
            <div className="pl-input-checkbox__name">{name}</div>
            {amount === 0
                ? <></>
                : <div className="pl-input-checkbox__amount">{amount}</div>
            }
        </div>
    )
};

export default Checkbox;
