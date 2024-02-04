import React, { useEffect, useState } from 'react';

const TextInput = ({
    placeholder = "",
    label = null,
    icon = null,
    iniValue = null
}) => {
    const [value, setValue] = useState('')

    useEffect(() => {
        if (iniValue !== null) {
            setValue(iniValue)
        }
    }, [])

    const handleOnChange = (e) => {
        setValue(e.target.value)
    }



    return (
        <div className={'input-container ' + (icon !== null ? 'input-container_with_icon' : '')}>
            <div className="input-container__inner">
                {icon !== null
                    ? <span><img src={icon} alt="" /></span>
                    : ""
                }
                <input 
                    type="text"
                    className='text-input' 
                    placeholder={placeholder}
                    value={value}
                    onChange={handleOnChange}
                />
            </div>
        </div>
    );
};

export default TextInput;