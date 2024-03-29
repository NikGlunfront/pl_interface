import React from "react"
import { useTranslate } from "../../hooks/useTranslate";

const AddAdressBtn = ({
    
}) => {
    const { tr } = useTranslate()

    return (
        <div className="topmenu-btn">{tr('Button.AddAddress')}</div>
    )
};

export default AddAdressBtn;
