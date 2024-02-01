import React, { useState } from "react"
import YesNo from "../../UI/Input/YesNo";

const InactivePromoImg = ({
    
}) => {
    const [notifications, setNotifications] = useState(false)

    const toggleFunc = () => {
        setNotifications(!notifications)
    }

    return (
        <div className="list-item-inactive">
            <span>Временно на паузе</span>
            <div>
                <YesNo 
                   toggleFunc={toggleFunc}
                   isChecked={notifications}
                   name={'Напомнить в ЛС'} 
                />
                <span></span>
            </div>
        </div>
    )
};

export default InactivePromoImg;