import React, { useEffect, useState } from "react"
import FilterWindow from "../UI/SmartSelect/FilterWindow";
import ReturnBtn from "../UI/ReturnBtn/ReturnBtn";
import { useSelector } from "react-redux";
import { useTranslate } from "../../hooks/useTranslate";
import AdressItem from "./AdressItem";

const ManageAdress = ({
    visible,
    manageAdressData,
    adressData
}) => {
    const { tr } = useTranslate()
    const [manageData, setManageData] = useState([])

    useEffect(() => {
        setManageData(adressData)
    }, [adressData])

    if (manageData.length === 0) {
        return
    }

    return (
        <FilterWindow visible={visible} >
            <div className="pl-return-toppanel">
                <ReturnBtn onClickFunc={manageAdressData} className={"pl-return-toppanel__return"} />
                <div className="pl-return-toppanel__title">{tr('Адреса')}</div>
            </div>
            <div className="adress-box">
                {manageData.map((adress) => (
                    <AdressItem 
                        key={adress.id}
                        city_id={adress.city_id}
                        adress={adress.adress}
                        controlsActive={true}
                        mapLink={adress.map_url}
                    />
                ))}
            </div>
        </FilterWindow>
    )
};

export default ManageAdress;
