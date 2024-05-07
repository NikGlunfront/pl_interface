import React, { useEffect, useRef, useState } from "react"
import FilterWindow from "../UI/SmartSelect/FilterWindow";
import ReturnBtn from "../UI/ReturnBtn/ReturnBtn";
import { useDispatch, useSelector } from "react-redux";
import { useTranslate } from "../../hooks/useTranslate";
import AddAdressBtn from "./AddAdressBtn";
import AdressCityGroupControls from "./AdressCityGroupControls";
import AdressCreator from "./AdressCreator";
import { setAdressToEdit, setPageFreezedParam, setAdressToDelete } from "../../store/slices/pageSlice/pageSlice";
import { useScroll } from "../../hooks/useScroll";
import { useValidation } from "../../hooks/useValidation";
import { useTelegram } from "../../hooks/useTelegram";

const ManageAdress = ({
    visible,
    manageAdressData,
    adressData,
    closeList
}) => {
    const { tr } = useTranslate()
    const dispatch = useDispatch()
    const { sendAlert } = useTelegram()
    const { isValidNewAdress } = useValidation()
    const { scrollToRef } = useScroll()
    const {cities} = useSelector(state => state.iniData)
    const { darkTheme: isDarkTheme, isPageFreezed, adressToEdit, adressToDelete } = useSelector(state => state.pageMeta)
    const [searchQ, setSearchQ] = useState('')
    const [editedAdress, setEditedAdress] = useState(null)
    const [isEditing, setIsEditing] = useState(false)
    const [clearActive, setClearActive] = useState(false)
    const myRef = useRef(null)

    useEffect(() => {
        if (adressToDelete !== null) {
            manageAdressData(adressData.filter(item => item.id !== adressToDelete.id))
            dispatch(setAdressToDelete(null))
        }
    }, [adressToDelete])

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

    const insertNewAdress = (newAdress) => {
        const updatedAddresses = adressData.map((adress) => {
            if (adress.id === newAdress.id) {
                return newAdress
            } else {
                return adress
            }
        })
        manageAdressData(updatedAddresses)
    }

    const clearSearch = () => {
        setSearchQ('')
    }

    const getEditedAdress = (newAdressData) => {
        setEditedAdress(newAdressData)
    }

    const cancelEdit = () => {
        setEditedAdress(null)
        dispatch(setAdressToEdit(null))
        dispatch(setPageFreezedParam(false))
        setIsEditing(false)
    }
    const saveEdit = () => {
        const checkIsValidAdress = isValidNewAdress(editedAdress)
        if (!checkIsValidAdress.success) {
            sendAlert(tr(checkIsValidAdress.error))
            return
        }
        if (editedAdress.id !== 0) {
            if (isEditing) {
                manageAdressData(...adressData, editedAdress)
            } else {
                insertNewAdress(editedAdress)
            }
        } else {
            sendAlert(tr('Alerts.NewAddress.SuccessfullyAdded'))
        }
        setEditedAdress(null)
        dispatch(setAdressToEdit(null))
        dispatch(setPageFreezedParam(false))
        setIsEditing(false)
    }

    const addNewAdress = () => {
        scrollToRef(myRef.current)
        setIsEditing(true)
        dispatch(setPageFreezedParam(true))
    }

    if (adressData.length === 0) {
        return
    }

    return (
        <FilterWindow visible={visible} classNameSub={"editable-addresses__popup" + (isPageFreezed ? " _inactive" : '')}>
            <div className="pl-return-toppanel _adresspage" >
                <ReturnBtn onClickFunc={closeList} className={"pl-return-toppanel__return"} />
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
            {adressToEdit !== null || isEditing
                ?
                    <>
                        <AdressCreator
                            valueGetter={getEditedAdress}
                            iniValue={adressToEdit}
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
                    <AdressCityGroupControls
                        creatorRef={myRef.current} 
                        adresses={adressData}
                        searchQ={searchQ}
                        city={city}
                        key={city.id}
                    />
                ))}
            </div>
        </FilterWindow>
    )
};

export default ManageAdress;
