import React, { useEffect } from "react"
import InfoGroup from "../../../containers/InfoGroup";
import { useTranslate } from "../../../hooks/useTranslate";
import { useMetaData } from "../../../hooks/useMetaData";

const PromoTags = ({
    children,
    tags = [],
    activeTagsList = null
}) => {
    const { tr } = useTranslate()
    const { getTagNameById } = useMetaData()
    if (tags.length === 0) {
        return
    }


    const checkIsActiveTag = (tag) => {
        let isActive = false
        for (let i = 0; i < Object.keys(activeTagsList).length; i++) {
            const chosenTagList = activeTagsList[Object.keys(activeTagsList)[i]];
            console.log(chosenTagList)
            if (chosenTagList.includes(tag)) {
                isActive = true
                break;
            }
        }
        return isActive
    }
    return (
        <InfoGroup title={tr('Promo.InfoGroup.Title.Tags')}  className={'pl-promo-page-tags'}>
            {tags.map((tag, index) => (
                <span 
                    key={tag}
                    className={"pl-promo-page-tags__item" + (activeTagsList !== null && checkIsActiveTag(tag) ? " pl-promo-page-tags__item_active" : "")}
                >
                    {tr(getTagNameById(tag))}{index === tags.length - 1 ? "" : ", "}
                </span>
            ))}
        </InfoGroup>
    )
};

export default PromoTags;