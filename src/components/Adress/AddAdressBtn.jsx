import React from "react"
import { useTranslate } from "../../hooks/useTranslate";

const AddAdressBtn = ({
    onClick
}) => {
    const { tr } = useTranslate()

    return (
        <div className="topmenu-btn" onClick={onClick}>{tr('Button.AddAddress')}</div>
    )
};

export default AddAdressBtn;
