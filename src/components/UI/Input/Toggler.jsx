import React, { useEffect, useState } from 'react';

const Toggler = ({
    value = false,
    onChange
}) => {
    const [isActive, setIsActive] = useState(false)


    useEffect(() => {
        if (value) {
            setIsActive(value)
        }
    }, [])

    const handleToggle = () => {
        onChange(!value)
    }
    return (
        <div className={'pl-toggler' + (value ? " _active" : '')} onClick={handleToggle}>
            <span></span>
        </div>
    );
};

export default Toggler;