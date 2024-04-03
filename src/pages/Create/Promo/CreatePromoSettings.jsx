import React, { useEffect, useState } from "react"
import RangeSlider from "../../../components/UI/RangeSlider/RangeSlider";
import InfoGroup from "../../../containers/InfoGroup";
import { useTranslate } from "../../../hooks/useTranslate";
import 'react-calendar/dist/Calendar.css';
import { useSelector } from "react-redux";
import Datepicker from "../../../components/UI/Datepicker/Datepicker";
import YesNo from "../../../components/UI/Input/YesNo";
import CitySelector from "../../../components/Selectors/CitySelector/CitySelector";
import CategorySelector from "../../../components/Selectors/CategorySelector/CategorySelector";

const CreatePromoSettings = ({
    getData,
    setIsCompleted
}) => {
    const { tr } = useTranslate()
    const langCode = useSelector(state => state.user.lang)
    const settingsState = useSelector(state => state.createPromo.settings)
    const [giftsAmount, setGiftsAmount] = useState(0)
    const [priceAmount, setPriceAmount] = useState(0)
    const [dateValue, setDateValue] = useState(null)
    const [isNoDate, setIsNoDate] = useState(false)
    const [citiesToShowIn, setCitiesToShowIn] = useState([])
    const [catsToShowIn, setCatsToShowIn] = useState([])

    useEffect(() => {
        if (settingsState.date_end === null) {
            setIsNoDate(true)
            setDateValue(null)
        } else {
            setDateValue(settingsState.date_end)
        }
        settingsState.giftsAmount && setGiftsAmount(settingsState.giftsAmount)
        settingsState.price_per_click && setPriceAmount(settingsState.price_per_click)
    }, [])

    const toggleNoDate = () => {
        setIsNoDate(!isNoDate)
    }

    const validatePromoSettings = () => {
        if (dateValue === null && !isNoDate) {
            return false
        }
        if (priceAmount === 0) {
            return false
        }
        if (giftsAmount === 0) {
            return false
        }
        if (catsToShowIn.length === 0) {
            return false
        }
        if (citiesToShowIn.length === 0) {
            return false
        }
        return true
    }

    useEffect(() => {
        getData({
            gifts_amount: giftsAmount,
            price_per_click: priceAmount,
            date_end: isNoDate ? null : dateValue,
            citiesToShowIn: citiesToShowIn,
            catsToShowIn: catsToShowIn
        })
        setIsCompleted(validatePromoSettings())
    }, [giftsAmount, priceAmount, dateValue, catsToShowIn, citiesToShowIn, isNoDate])

    return (
        <div className="settings-create-promo">
            <InfoGroup title={tr("Promo.InfoGroup.Title.ShowInFeeds")}>
                <CitySelector 
                    callbackCity={setCitiesToShowIn}
                    withIcon={true}
                    stateData={settingsState.citiesToShowIn}
                />
                <CategorySelector 
                    callbackCategory={setCatsToShowIn}
                    withIcon={true}
                    stateData={settingsState.catsToShowIn}
                />
            </InfoGroup>
            <InfoGroup title={tr('Promo.InfoGroup.Title.PromoAmount')}>
                <RangeSlider 
                    max={999}
                    min={0}
                    step={1}
                    iniValue={giftsAmount}
                    onChange={setGiftsAmount}
                    type="amount"
                />
            </InfoGroup>
            <InfoGroup title={tr('Promo.InfoGroup.Title.ClickPrice')}>
                <RangeSlider 
                    max={999}
                    min={0}
                    step={1}
                    iniValue={priceAmount}
                    onChange={setPriceAmount}
                />
            </InfoGroup>
            <InfoGroup title={tr('Promo.InfoGroup.Title.ExpirationDate')} >
                <div className={"settings-create-promo__date " + (isNoDate ? 'settings-create-promo__date_nolimits ' : '')}>
                    <Datepicker 
                        localeLang={langCode}
                        onChange={setDateValue}
                        value={dateValue}
                        iniValue={dateValue}
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
