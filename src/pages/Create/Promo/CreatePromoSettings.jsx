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
            <CategorySelector 
                callbackCategory={setCatsToShowIn}
                withIcon={true}
                stateData={settingsState.catsToShowIn}
            />
            <Datepicker 
                localeLang={langCode}
                onChange={setDateValue}
                value={dateValue}
                iniValue={dateValue}
                title={'Page.Title.DateEnd'}
            />
        </div>
    )
};

export default CreatePromoSettings;
