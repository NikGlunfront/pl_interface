import React from "react"

const Checkbox = ({
    toggleFunc,
    name,
    id,
    isChecked,
    bigImg = null,
    subName = null,
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
    if (subName !== null) {
        className += ' pl-input-checkbox_sub'
    }
    if (bigImg !== null) {
        className += ' pl-input-checkbox_imgbig'
    }
    return (
        <div className={className} onClick={onClickHandler}>
            <div className="pl-input-checkbox__checkbox"><span></span></div>
            {bigImg !== null &&
                <img src={bigImg} alt="" />
            }
            {subName !== null
                ?
                <div className="pl-input-checkbox__name">
                    <span>{name}</span>
                    <span>{subName}</span>
                </div>
                :
                <div className="pl-input-checkbox__name">{name}</div>
            }
            {amount === 0
                ? <></>
                : <div className="pl-input-checkbox__amount">{amount}</div>
            }
        </div>
    )
};

export default Checkbox;
