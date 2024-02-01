import React from "react"

const PromoBrand = ({
    brandImg,
    brandName
}) => {

    return (
        <div className="list-item__brand">
            <div className="list-item__brand_icon">
                <img src={brandImg} alt={brandName} />
            </div>
            <div className="list-item__brand_name">{brandName}</div>
        </div>
    )
};

export default PromoBrand;
