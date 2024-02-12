import React, { useState } from "react"
import RangeSlider from "../../../components/UI/RangeSlider/RangeSlider";
import InfoGroup from "../../../containers/InfoGroup";
import { useTranslate } from "../../../hooks/useTranslate";

const CreatePromoSettings = ({
    
}) => {
    const { tr } = useTranslate()
    const [giftsAmount, setGiftsAmount] = useState(0)

    const handleRangeChange = (val) => {
        setGiftsAmount(val)
    }

    return (
        <div className="settings-create-promo">
            <InfoGroup title={tr('Promo.InfoGroup.Title.PromoAmount')}>
                <RangeSlider 
                    max={999}
                    min={1}
                    step={1}
                    onChange={handleRangeChange}
                    type="amount"
                />
            </InfoGroup>
            <InfoGroup title={tr('Promo.InfoGroup.Title.ClickPrice')}>
                <RangeSlider 
                    max={999}
                    min={1}
                    step={1}
                    onChange={handleRangeChange}
                />
            </InfoGroup>
            <InfoGroup title={tr('Promo.InfoGroup.Title.ExpirationDate')} >
                Календарь
            </InfoGroup>
        </div>
    )
};

export default CreatePromoSettings;
