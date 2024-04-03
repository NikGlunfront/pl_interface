import React from "react"
import { useTranslate } from "../../../hooks/useTranslate";
import InfoGroup from "../../../containers/InfoGroup";
import AdressItem from "../../Adress/AdressItem";

const PromoAdress = ({
    adresses = []
}) => {
    const { tr } = useTranslate()

    if (adresses.length === 0 ) {
        return
    }

    return (
        <InfoGroup 
                title={tr('Promo.InfoGroup.Title.Adress')} 
                className={"editable-addresses"}
                subTitleClass={'editable-adresses__amount'}
                subTitleNum={adresses.length}
        >
           <AdressItem
                key={adresses[0].id}
                adress={adresses[0]}
            />
        </InfoGroup>
    )
};

export default PromoAdress;
