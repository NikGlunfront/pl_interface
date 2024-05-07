import React, { useEffect, useState } from "react"
import { useTranslate } from "../../../hooks/useTranslate";
import InfoGroup from "../../../containers/InfoGroup";
import AdressItem from "../../Adress/AdressItem";
import FilterWindow from "../../UI/SmartSelect/FilterWindow";
import ReturnBtn from "../../UI/ReturnBtn/ReturnBtn";
import { setIsContentHidden } from "../../../store/slices/pageSlice/pageSlice";
import { useDispatch, useSelector } from "react-redux";
import AdressCityGroupControls from "../../Adress/AdressCityGroupControls";

const PromoAdress = ({
    adresses = []
}) => {
    const { tr } = useTranslate()
    const dispatch = useDispatch()
    const { darkTheme: isDarkTheme } = useSelector(state => state.pageMeta)
    const {cities} = useSelector(state => state.iniData)
    const [listVisible, setListVisible] = useState(false)
    const [searchQ, setSearchQ] = useState('')
    const [clearActive, setClearActive] = useState(false)

    useEffect(() => {
        if (searchQ !== '') {
            setClearActive(true)
        } else {
            setClearActive(false)
        }
    }, [searchQ])

    const openFilterList = (e) => {
        setListVisible(true)
        dispatch(setIsContentHidden(true))
    }
    const closeList = () => {
        setListVisible(false)
        dispatch(setIsContentHidden(false))
    }

    const clearSearch = () => {
        setSearchQ('')
    }

    const onChangeSearch = (e) => {
        setSearchQ(e.target.value)
    }

    if (adresses.length === 0 ) {
        return
    }
    

    return (
        <InfoGroup 
                title={tr('Promo.InfoGroup.Title.Adress')} 
                className={"editable-addresses"}
                subTitleClass={'editable-adresses__amount'}
                subTitleNum={adresses.length}
                titleOnClick={openFilterList}
        >
            <FilterWindow visible={listVisible} classNameSub={"editable-addresses__popup"}>
                <div className="pl-return-toppanel _adresspage" >
                    <ReturnBtn onClickFunc={closeList} className={"pl-return-toppanel__return"} />
                    <div className="pl-return-toppanel__title">{tr('Addresses')}</div>
                    {/* <AddAdressBtn onClick={addNewAdress} /> */}
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
                <div className="adress-box">
                    {cities.map(city => (
                        <AdressCityGroupControls
                            adresses={adresses}
                            searchQ={searchQ}
                            city={city}
                            key={city.id}
                            controlsActive={false}
                        />
                    ))}
                </div>
            </FilterWindow>
           <AdressItem
                key={adresses[0].id}
                adress={adresses[0]}
            />
        </InfoGroup>
    )
};

export default PromoAdress;
