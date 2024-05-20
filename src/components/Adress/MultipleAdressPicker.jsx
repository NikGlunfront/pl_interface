import React, { useEffect, useRef, useState } from "react"
import FilterWindow from "../UI/SmartSelect/FilterWindow";
import { useDispatch, useSelector } from "react-redux";
import ReturnBtn from "../UI/ReturnBtn/ReturnBtn";
import { useTranslate } from "../../hooks/useTranslate";
import AdressCityGroup from "./AdressCityGroup";
import AddAdressBtn from "./AddAdressBtn";
import { useValidation } from "../../hooks/useValidation";
import { setPageFreezedParam } from "../../store/slices/pageSlice/pageSlice";
import { useTelegram } from "../../hooks/useTelegram";
import AdressCreator from "./AdressCreator";
import { useScroll } from "../../hooks/useScroll";
import { setCompany } from "../../store/slices/user/userSlice";

const MultipleAdressPicker = ({
    listVisible,
    updateAdressList,
    adressList,
    activeAdressList,
    closeList,
    cities
}) => {
    const { darkTheme: isDarkTheme, isPageFreezed } = useSelector(state => state.pageMeta)
    const companyState = useSelector(state => state.user.company)
    const { tr } = useTranslate()
    const { scrollToRef } = useScroll()
    const { sendAlert } = useTelegram()
    const { isValidNewAdress } = useValidation()
    const dispatch = useDispatch()
    const [searchQ, setSearchQ] = useState('')
    const [clearActive, setClearActive] = useState(false)
    const [editedAdress, setEditedAdress] = useState(null)
    const [isEditing, setIsEditing] = useState(false)
    const myRef = useRef(null)
    

    useEffect(() => {
        if (searchQ !== '') {
            setClearActive(true)
        } else {
            setClearActive(false)
        }
    }, [searchQ])

    const onChangeSearch = (e) => {
        setSearchQ(e.target.value)
    }

    const returnBtnClick = () => {
        closeList()
        setEditedAdress(null)
        dispatch(setPageFreezedParam(false))
        setIsEditing(false)
    }

    const clearSearch = () => {
        setSearchQ('')
    }

    const getEditedAdress = (newAdressData) => {
        setEditedAdress(newAdressData)
    }

    const cancelEdit = () => {
        setEditedAdress(null)
        dispatch(setPageFreezedParam(false))
        setIsEditing(false)
    }

    const addNewAdress = () => {
        scrollToRef(myRef.current)
        setIsEditing(true)
        dispatch(setPageFreezedParam(true))
    }

    const saveEdit = () => {
        const checkIsValidAdress = isValidNewAdress(editedAdress)
        if (!checkIsValidAdress.success) {
            sendAlert(tr(checkIsValidAdress.error))
            return
        }
        sendAlert(tr('Alerts.NewAddress.SuccessfullyAdded'))
        // dispatch(setCompany({
        //     ...companyState,
        //     adress: [...companyState.adress, editedAdress]
        // }))
        // ЛОГИКА ДЛЯ ДОБАВЛЕНИЯ НОВОГО АДРЕСА И ОБНОВЛЕНИЯ СТЕЙТА

        setEditedAdress(null)
        dispatch(setPageFreezedParam(false))
        setIsEditing(false)
    }

    return (
        <FilterWindow visible={listVisible} classNameSub={"editable-addresses__popup" + (isPageFreezed ? " _inactive" : '')}>
            <div className="pl-return-toppanel _adresspage">
                <ReturnBtn onClickFunc={returnBtnClick} className={"pl-return-toppanel__return"} />
                <div className="pl-return-toppanel__title">{tr('Addresses')}</div>
                <AddAdressBtn onClick={addNewAdress} />
            </div>
            <div className="adress-search">
                <div className="filters-pl-select__search">
                    <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M13.1875 7.09375C13.1875 10.4594 10.4594 13.1875 7.09375 13.1875C3.72813 13.1875 1 10.4594 1 7.09375C1 3.72813 3.72813 1 7.09375 1C10.4594 1 13.1875 3.72813 13.1875 7.09375Z" stroke={isDarkTheme ? "white" : "black"} strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M12.25 12.25L16 16" stroke={isDarkTheme ? "white" : "black"} strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <input 
                        type="text" 
                        placeholder={tr('Search.Placeholder.Addresses')} 
                        value={searchQ} 
                        onChange={onChangeSearch} 
                    />
                    <div className={["search-clear " + (clearActive ? "search-clear_visible" : '')]} onClick={clearSearch}>
                        <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10 1.00011L1 10M10 9.99989L1 1" stroke={isDarkTheme ? "white" : "black"} strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </div>
                </div>
            </div>
            <div className="pl-return-panel__compensator" ref={myRef}></div>
            <div className="adress-creator-container">
            {isEditing
                ?
                    <>
                        <AdressCreator
                            valueGetter={getEditedAdress}
                        />
                        <div className="adress-creator-container__controls">
                            <div onClick={cancelEdit}>{tr('Button.Cancel')}</div>
                            <div onClick={saveEdit}>{tr('Button.Save')}</div>
                        </div>
                    </>
                : <></>
            }
            </div>
            <div className="adress-box">
                {cities.map(city => (
                    <AdressCityGroup 
                        adresses={adressList}
                        searchQ={searchQ}
                        city={city}
                        key={city.id}
                        toggleFunc={updateAdressList}
                        activeAdress={activeAdressList}
                    />
                ))}
            </div>
        </FilterWindow>
    )
};

export default MultipleAdressPicker;
