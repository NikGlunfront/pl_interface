import React from "react"
import InfoGroup from "../../../containers/InfoGroup";
import { useTranslate } from "../../../hooks/useTranslate";

const PromoDescription = ({
    children
}) => {
    const { tr } = useTranslate()

    return (
        <InfoGroup title={tr('Promo.InfoGroup.Title.Description')} >
            Lorem ipsum dolor sit amet consectetur. Eu sed sit elementum lectus vitae leo proin. Leo morbi pellentesque vitae pellentesque sodales nulla risus. Faucibus in feugiat adipiscing in in egestas etiam scelerisque. Eget nullam nisl commodo ut ullamcorper.Lorem ipsum dolor sit amet consectetur. Eu sed sit elementum lectus vitae leo proin. Leo morbi pellentesque vitae pellentesque sodales nulla risus. Faucibus in feugiat adipiscing in in egestas etiam scelerisque. Eget nullam nisl commodo ut ullamcorper.
        </InfoGroup>
    )
};

export default PromoDescription;
