import React, { useEffect, useState } from "react"
import FilterWindow from "../../UI/SmartSelect/FilterWindow";
import { useDispatch, useSelector } from "react-redux";
import { useTranslate } from "../../../hooks/useTranslate";
import ReturnBtn from "../../UI/ReturnBtn/ReturnBtn";
import DeliveryCountryGroup from "./DeliveryCountryGroup";
import TextArea from "../../UI/Input/TextArea";

const DeliveryWindow = ({
    listVisible,
    closeList,
    updateDeliveryList
}) => {
    const { darkTheme: isDarkTheme } = useSelector(state => state.pageMeta)
    const { tr } = useTranslate()
    const { countries } = useSelector(state => state.iniData)
    const { delivery: deliveryState } = useSelector(state => state.createPromo)
    const [searchQ, setSearchQ] = useState('')
    const [clearActive, setClearActive] = useState(false)
    const [deliveryList, setDeliveryList] = useState([])
    const [deliveryDescr, setDeliveryDescr] = useState('')

    useEffect(() => {
        // console.log(deliveryState)
        if (deliveryState?.list.length > 0) {
            setDeliveryList(deliveryState.list)
            setDeliveryDescr(deliveryState.description)
            updateDeliveryList({list: deliveryState.list, description: deliveryState.description})
        }
    }, [])

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
        // setEditedAdress(null)
    }

    const handleDescrChange = (value) => {
        setDeliveryDescr(value)
        // updateDeliveryList({list: deliveryDescr.length > 0 ? deliveryList : [], description: value})
        updateDeliveryList({list: deliveryList, description: value})
    }

    const callbackDelivery = (id) => {
        let newList = [...deliveryList]
        if (deliveryList.indexOf(id) !== -1) {
            newList = newList.filter(item => item !== id)
        } else {
            newList = [...newList, id]
        }
        setDeliveryList(newList)
        // updateDeliveryList({list: deliveryDescr.length > 0 ? newList : [], description: deliveryDescr})
        updateDeliveryList({list: newList, description: deliveryDescr})
    }

    const clearSearch = () => {
        setSearchQ('')
    }

    return (
        <FilterWindow visible={listVisible}>
            <div className="pl-return-toppanel _delivery">
                <ReturnBtn onClickFunc={returnBtnClick} className={"pl-return-toppanel__return"} />
                <div className="pl-return-toppanel__title">{tr('Delivery')}</div>
            </div>
            <div className="adress-search">
                <div className="filters-pl-select__search">
                    <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M13.1875 7.09375C13.1875 10.4594 10.4594 13.1875 7.09375 13.1875C3.72813 13.1875 1 10.4594 1 7.09375C1 3.72813 3.72813 1 7.09375 1C10.4594 1 13.1875 3.72813 13.1875 7.09375Z" stroke={isDarkTheme ? "white" : "black"} strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M12.25 12.25L16 16" stroke={isDarkTheme ? "white" : "black"} strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <input 
                        type="text" 
                        placeholder={tr('Search.Placeholder.City')} 
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
            <div className="delivery-description">
                <TextArea 
                    placeholder={tr('CreatePromo.InputFields.ShortDescription')}
                    handleChange={handleDescrChange}
                    iniValue={deliveryDescr}
                />
            </div>
            <div className="delivery-box">
                {countries.map(country => (
                    <DeliveryCountryGroup 
                        countryObj={country}
                        searchQ={searchQ}
                        key={country.id}
                        callbackDelivery={callbackDelivery}
                        activeCities={deliveryList}
                    />
                ))}
            </div>
        </FilterWindow>
    )
};

export default DeliveryWindow;
