import React, { useEffect, useState } from 'react';

const TextArea = ({
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
            <div className="input-container__inner input-container__inner_textarea">
                {icon !== null
                    ? <span><img src={icon} alt="" /></span>
                    : ""
                }
                <textarea 
                    className='text-textarea' 
                    placeholder={placeholder}
                    onChange={handleOnChange}
                >{value}</textarea>
            </div>
        </div>
    );
};

export default TextArea;