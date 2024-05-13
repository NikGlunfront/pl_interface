import React from "react"
import InfoGroup from "../../../containers/InfoGroup";
import { useTranslate } from "../../../hooks/useTranslate";

const PromoDescription = ({
    children,
    isSkeleton = false
}) => {
    const { tr } = useTranslate()

    return (
        <InfoGroup title={tr('Promo.InfoGroup.Title.Description')} >
            <div className={isSkeleton ? "skeleton-ui" : "promo-description"}>
                <span dangerouslySetInnerHTML={{ __html: children }} />
            </div>
        </InfoGroup>
    )
};

export default PromoDescription;
