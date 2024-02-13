import React, { useState } from "react"
import RangeSlider from "../../../components/UI/RangeSlider/RangeSlider";
import InfoGroup from "../../../containers/InfoGroup";
import { useTranslate } from "../../../hooks/useTranslate";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';
import { useDispatch, useSelector } from "react-redux";
import { setIsContentHidden } from "../../../store/slices/pageSlice/pageSlice";
import Datepicker from "../../../components/UI/Datepicker/Datepicker";
import YesNo from "../../../components/UI/Input/YesNo";

const CreatePromoSettings = ({
    
}) => {
    const { tr } = useTranslate()
    const dispatch = useDispatch()
    const langCode = useSelector(state => state.user.lang)
    const [giftsAmount, setGiftsAmount] = useState(0)
    const [dateValue, setDateValue] = useState(null)
    const [isNoDate, setIsNoDate] = useState(false)

    const pickDate = (val) => {
        setDateValue(val)
    }

    const toggleNoDate = () => {
        setIsNoDate(!isNoDate)
    }

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
                <div className={"settings-create-promo__date " + (isNoDate ? 'settings-create-promo__date_nolimits ' : '')}>
                    <Datepicker 
                        localeLang={langCode}
                        onChange={setDateValue}
                        value={dateValue}
                        title={'Page.Title.DateEnd'}
                    />
                    <div className='settings-create-promo__nolimit'>
                        <YesNo toggleFunc={toggleNoDate} isChecked={isNoDate} name={tr('CreatePromo.InputFields.NoEndDate')} color="#000000" />
                    </div>
                </div>
            </InfoGroup>
        </div>
    )
};

export default CreatePromoSettings;
