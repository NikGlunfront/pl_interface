import React, { useEffect, useState } from 'react';

const TextArea = ({
    placeholder = "",
    label = null,
    icon = null,
    handleChange,
    iniValue = null,
    symbolNum = 0
}) => {
    const [value, setValue] = useState('')

    useEffect(() => {
        if (iniValue !== null) {
            setValue(iniValue)
        }
    }, [iniValue])

    const handleOnChange = (e) => {
        setValue(e.target.value)
        handleChange(e.target.value)
    }



    return (
        <div className={'input-container ' + (icon !== null ? 'input-container_with_icon' : '')}>
            <div className="input-container__inner input-container__inner_textarea">
                {symbolNum !== 0 &&
                    <div className="input-container__symbols">{symbolNum - value.length}</div>
                }
                {icon !== null
                    ? <span><img src={icon} alt="" /></span>
                    : ""
                }
                <textarea 
                    className='text-textarea' 
                    placeholder={placeholder}
                    onChange={handleOnChange}
                    value={value}
                />
            </div>
        </div>
    );
};

export default TextArea;