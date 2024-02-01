import React from "react"

const PromoBio = ({
    name,
    description,
    location
}) => {

    return (
        <>
            <div className="pl-promo__title">{name}</div>
            <div className="pl-promo__description">{description}</div>
            <div className="pl-promo__location">{location}</div>
        </>
    )
};

export default PromoBio;
