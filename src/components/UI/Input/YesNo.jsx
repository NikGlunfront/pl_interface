import React from "react"

const YesNo = ({
    toggleFunc,
    name,
    isChecked,
    color
}) => {

    const onClickHandler = () => {
        toggleFunc()
    }

    let className = 'pl-input-checkbox pl-input-checkbox_yesno '
    if (isChecked) {
        className += 'pl-input-checkbox_active'
    }
    return (
        <div className={className} onClick={onClickHandler}>
            <div className="pl-input-checkbox__checkbox" style={{borderColor: color}}><span></span></div>
            <div className="pl-input-checkbox__name">{name}</div>
        </div>
    )
};

export default YesNo;
