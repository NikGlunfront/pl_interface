import React from "react"

const PromoBadges = ({
    gifts_amount_left,
    days_amount_left,
    inactive
}) => {

    return (
        <div className="badges-list-item">
            {gifts_amount_left && gifts_amount_left > 0 && inactive !== true 
                ? <div className="badges-list-item__gifts_left">Осталось подарков: <span>{gifts_amount_left}</span></div>
                : ""
            }
            {days_amount_left && inactive !== true
                ?   <div className="badges-list-item__days_left">{days_amount_left}</div>
                :   ""
            }
        </div>
    )
};

export default PromoBadges;
