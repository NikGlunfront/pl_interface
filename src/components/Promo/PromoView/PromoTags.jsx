import React from "react"
import InfoGroup from "../../../containers/InfoGroup";
import { useTranslate } from "../../../hooks/useTranslate";
import { useMetaData } from "../../../hooks/useMetaData";

const PromoTags = ({
    children,
    tags = [],
    activeTagsList = []
}) => {
    const { tr } = useTranslate()
    const { getTagNameById } = useMetaData()
    if (tags.length === 0) {
        return
    }
    return (
        <InfoGroup title={tr('Promo.InfoGroup.Title.Tags')}  className={'pl-promo-page-tags'}>
            {tags.map((tag, index) => (
                <span 
                    key={tag}
                    className={"pl-promo-page-tags__item" + (activeTagsList.length > 0 && activeTagsList.contains(tag) ? " pl-promo-page-tags__item_active" : "")}
                >
                    {tr(getTagNameById(tag))}{index === tags.length - 1 ? "" : ", "}
                </span>
            ))}
        </InfoGroup>
    )
};

export default PromoTags;