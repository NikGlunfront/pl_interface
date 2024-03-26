import React, { useEffect, useState } from "react"
import AdressItem from "./AdressItem";

const CheckBoxAdress = ({
    adress,
    isChecked,
    toggleFunc,
}) => {
    
    const onClickHandler = () => {
        toggleFunc(adress.id, isChecked)
    }
    
    if (!adress?.id) return false;

    let className = 'pl-input-checkbox adress-checkbox '
    if (isChecked) {
        className += 'pl-input-checkbox_active'
    }

    return (
        <div onClick={onClickHandler} className={className}>
            <div className="pl-input-checkbox__checkbox"><span></span></div>
            <AdressItem 
                adress={adress.adress}
                city_id={adress.city_id}
                mapLink={adress.map_url}
            />
        </div>
    )
};

export default CheckBoxAdress;
