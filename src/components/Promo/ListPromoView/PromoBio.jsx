import React from "react"

const PromoBio = ({
    name = '',
    description = '',
    location = '',
    isRemote = false
}) => {

    return (
        <>
            <div className={"pl-promo__title " + (name.length === 0 ? 'pl-promo__title_skeleton' : '')}>{name}</div>
            <div className={"pl-promo__description " + (description.length === 0 ? 'pl-promo__description_skeleton' : '')}>{description}</div>
            <div 
                className={"pl-promo__location " 
                    + (location.length === 0 ? 'pl-promo__location_skeleton ' : '')
                    + (isRemote ? 'pl-promo__location_remote ' : '')
                }
            >
                {isRemote ? 'Удаленная работа' : location}
            </div>
        </>
    )
};

export default PromoBio;
