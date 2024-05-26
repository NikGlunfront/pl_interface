import React, { useEffect, useRef, useState } from 'react';

const TextArea = ({
    placeholder = "",
    label = null,
    icon = null,
    handleChange,
    iniValue = null,
    symbolNum = 0
}) => {
    const textareaRef = useRef(null);
    const [value, setValue] = useState('')
    const [height, setHeight] = useState(35)

    useEffect(() => {
        if (iniValue !== null) {
            setValue(iniValue)
        }
        // setHeight(textareaRef.current.scrollHeight)
        // console.log(textareaRef.current.scrollHeight)
    }, [iniValue])

    useEffect(() => {
        setHeight(textareaRef.current.scrollHeight)
    }, [value])

    const handleOnChange = (e) => {
        setValue(e.target.value)
        setHeight(e.target.scrollHeight)
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
                    ref={textareaRef}
                    className='text-textarea' 
                    placeholder={placeholder}
                    style={{height: height}}
                    onChange={handleOnChange}
                    value={value}
                />
            </div>
        </div>
    );
};

export default TextArea;