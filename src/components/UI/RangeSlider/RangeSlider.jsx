import React, { useState } from "react"

const RangeSlider = ({
    step,
    min,
    max,
    onChange,
    type = "rub"
}) => {
    const [value, setValue] = useState(min)
    const handeMaxChange = (event) => {
        event.preventDefault()
        const value = parseFloat(event.target.value)
        setValue(value)
        onChange(value)
    }

    return (
        <div className="range-input">
            <div className="range-input-wrapper">
                <input 
                    type="range" 
                    value={value}
                    min={min}
                    max={max}
                    step={step}
                    onChange={handeMaxChange}
                />
            </div>
            <div className={"range-input__control-wrapper " + (type === 'amount' ? 'range-input__control-wrapper_amount' : '')}>
                <div className="range-input__control" style={{ left: `${(value - min) / (max - min) * 100}%` }} />
                    <div className="range-input__rail">
                    <div
                        className="range-input__inner-rail" 
                        style={{ left: `0`, width: `${(value - min) / (max - min) * 100}%` }}
                    />
                    <div
                        className="range-input__inner-rail-before"
                    />
                </div>
                <div 
                    className={"range-input__meta "}
                    style={{ left: `${(value - min) / (max - min) * 100}%` }}
                >
                    {value}
                </div>
            </div>
        </div>
    )
};

export default RangeSlider;
