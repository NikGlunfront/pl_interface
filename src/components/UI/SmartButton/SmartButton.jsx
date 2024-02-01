import React from "react"
import { Link } from "react-router-dom";

const SmartButton = ({
    disabled = false,
    color = null,
    icon = null,
    to = null,
    number = 0,
    onClick,
    children,
}) => {

    let className = "pl-button "
    if (disabled) {
        className += "pl-button_disabled "
    }
    if (color == 'red') {
        className += "pl-button_red "
    }
    if (color == 'black') {
        className += "pl-button_black "
    }

    return (
        to !== null
        ? 
        <Link 
            className={className}
            to={to}
        >              
            {children}       
            {icon && <img src={icon} alt={children} />}
            {number !== 0 && <span>{number}</span>}
        </Link>     
        :
        <div className={className} onClick={onClick}>
            {children}       
            {icon && <img src={icon} alt={children} />}
            {number !== 0 && <span>{number}</span>}
        </div>
        
             
    )
};

export default SmartButton;


