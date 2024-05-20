import React, { useEffect, useState } from "react"
import FilterWindow from "../../UI/SmartSelect/FilterWindow";
import ReturnBtn from "../../UI/ReturnBtn/ReturnBtn";
import { useTranslate } from "../../../hooks/useTranslate";
import Calendar from "react-calendar";
import { useDispatch, useSelector } from "react-redux";
import { setIsContentHidden } from "../../../store/slices/pageSlice/pageSlice";
import { useTelegram } from "../../../hooks/useTelegram";



const Datepicker = ({
    onChange,
    value,
    localeLang,
    title,
    iniValue = null
}) => {
    const { tr } = useTranslate()
    const dispatch = useDispatch()
    const { sendAlert } = useTelegram()
    const isDarkTheme = useSelector(state => state.pageMeta.darkTheme)
    const [listVisible, setListVisible] = useState(false)
    const [dateValue, setDateValue] = useState(null)

    useEffect(() => {
        if (iniValue !== null) {
            setDateValue(iniValue)
        }
    }, [iniValue])

    const onChangeDate = (val) => {
        const currentDate = new Date()
        if (val. getTime() <= currentDate. getTime()) {
            sendAlert(tr('Alerts.DatePicker.NotValidDate'))
        } else {
            setListVisible(false)
            dispatch(setIsContentHidden(false))
            setDateValue(val)
            onChange(val)
        }
    }

    const openFilterList = () => {
        setListVisible(true)
        dispatch(setIsContentHidden(true))
    }

    const closeWindow = () => {
        setListVisible(false)
        dispatch(setIsContentHidden(false))
    }

    const getStringDate = (dataObj) => {
        const day = dataObj.getDate().toString().padStart(2, "0");
        const month = (dataObj.getMonth() + 1).toString().padStart(2, "0");
        const year = dataObj.getFullYear().toString().slice(2); 
        return `${day}.${month}.${year}`
    }

    return (
        <>
            <div className={"pl-datepicker" + (dateValue !== null ? " pl-datepicker_picked" : '')} onClick={openFilterList}>
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3.9711 0C4.10106 0 4.22569 0.0516249 4.31758 0.143518C4.40948 0.23541 4.4611 0.360044 4.4611 0.49V1.4063H9.723V0.4963C9.723 0.366344 9.77462 0.24171 9.86652 0.149818C9.95841 0.0579249 10.083 0.0063 10.213 0.0063C10.343 0.0063 10.4676 0.0579249 10.5595 0.149818C10.6514 0.24171 10.703 0.366344 10.703 0.4963V1.4063H12.6C12.9712 1.4063 13.3272 1.5537 13.5897 1.8161C13.8522 2.0785 13.9998 2.43442 14 2.8056V12.6007C13.9998 12.9719 13.8522 13.3278 13.5897 13.5902C13.3272 13.8526 12.9712 14 12.6 14H1.4C1.02882 14 0.672829 13.8526 0.410298 13.5902C0.147767 13.3278 0.000185591 12.9719 0 12.6007L0 2.8056C0.000185591 2.43442 0.147767 2.0785 0.410298 1.8161C0.672829 1.5537 1.02882 1.4063 1.4 1.4063H3.4811V0.4893C3.48129 0.359465 3.53299 0.235012 3.62487 0.14327C3.71674 0.0515286 3.84126 -1.32484e-07 3.9711 0ZM0.98 5.4194V12.6007C0.98 12.6559 0.990864 12.7105 1.01197 12.7614C1.03308 12.8124 1.06401 12.8587 1.10302 12.8977C1.14202 12.9367 1.18832 12.9676 1.23927 12.9887C1.29023 13.0098 1.34484 13.0207 1.4 13.0207H12.6C12.6552 13.0207 12.7098 13.0098 12.7607 12.9887C12.8117 12.9676 12.858 12.9367 12.897 12.8977C12.936 12.8587 12.9669 12.8124 12.988 12.7614C13.0091 12.7105 13.02 12.6559 13.02 12.6007V5.4292L0.98 5.4194ZM4.6669 10.2333V11.3995H3.5V10.2333H4.6669ZM7.5831 10.2333V11.3995H6.4169V10.2333H7.5831ZM10.5 10.2333V11.3995H9.3331V10.2333H10.5ZM4.6669 7.4494V8.6156H3.5V7.4494H4.6669ZM7.5831 7.4494V8.6156H6.4169V7.4494H7.5831ZM10.5 7.4494V8.6156H9.3331V7.4494H10.5ZM3.4811 2.3856H1.4C1.34484 2.3856 1.29023 2.39646 1.23927 2.41757C1.18832 2.43868 1.14202 2.46961 1.10302 2.50862C1.06401 2.54762 1.03308 2.59392 1.01197 2.64487C0.990864 2.69583 0.98 2.75044 0.98 2.8056V4.4401L13.02 4.4499V2.8056C13.02 2.75044 13.0091 2.69583 12.988 2.64487C12.9669 2.59392 12.936 2.54762 12.897 2.50862C12.858 2.46961 12.8117 2.43868 12.7607 2.41757C12.7098 2.39646 12.6552 2.3856 12.6 2.3856H10.703V3.0359C10.703 3.16586 10.6514 3.29049 10.5595 3.38238C10.4676 3.47428 10.343 3.5259 10.213 3.5259C10.083 3.5259 9.95841 3.47428 9.86652 3.38238C9.77462 3.29049 9.723 3.16586 9.723 3.0359V2.3856H4.4611V3.0296C4.4611 3.15956 4.40948 3.28419 4.31758 3.37608C4.22569 3.46798 4.10106 3.5196 3.9711 3.5196C3.84114 3.5196 3.71651 3.46798 3.62462 3.37608C3.53272 3.28419 3.4811 3.15956 3.4811 3.0296V2.3856Z" 
                        fill={isDarkTheme ? "#78779A" : "black"}
                    />
                </svg>
                {tr('Datepicker.Placeholder')}
                {dateValue !== null &&
                    <div className="pl-datepicker__date">{getStringDate(dateValue)}</div>
                }
            </div>
            <FilterWindow visible={listVisible} >
                <div className="pl-return-toppanel">
                    <ReturnBtn onClickFunc={closeWindow} className={"pl-return-toppanel__return"} />
                    <div className="pl-return-toppanel__title">{tr(title)}</div>
                </div>
                <div className="filters-pl-select__filters">
                    <Calendar value={value} onChange={onChangeDate} locale={localeLang} />
                </div>
            </FilterWindow>
        </>
    )
};

export default Datepicker;
