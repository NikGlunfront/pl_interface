import React, { useEffect, useState } from "react"
import TextInput from "../UI/Input/TextInput";
import { useTranslate } from "../../hooks/useTranslate";
import { useDispatch, useSelector } from "react-redux";
import { setIsContentHidden } from "../../store/slices/pageSlice/pageSlice";
import CityFilterWindow from "../Filters/CityFilter/CityFilterWindow";

const adressInputs = [
    {id: 'adress', icon: null, placeholder: 'Partner.InputFields.Adress'},
    {id: 'map_url', icon: null, placeholder: 'Partner.InputFields.GoogleMapsLink'},
]

const AdressCreator = ({
    valueGetter,
    iniValue = null,
    buttonsControl
}) => {
    const { tr } = useTranslate()
    const dispatch = useDispatch()
    const iniData = useSelector(state => state.iniData)
    const [city, setCity] = useState(null)
    const [textAdress, setTextAdress] = useState('')
    const [listVisible, setListVisible] = useState(false)
    const [mapLink, setMapLink] = useState('')

    useEffect(() => {
        if (iniValue != null) {
            setCity({
                id: iniValue.city_id ? iniValue.city_id : 0,
                name: iniValue.city_id ? iniData.cities.filter(dataCity => dataCity.id === iniValue.city_id)[0].name : '',
                country_id: iniValue.city_id ? iniData.cities.filter(dataCity => dataCity.id === iniValue.city_id)[0].country_id : '',      
            })
            setTextAdress(iniValue.adress)
            setMapLink(iniValue.map_url)
        }
    }, [])

    const openFilterList = () => {
        setListVisible(true)
        dispatch(setIsContentHidden(true))
    }

    const updateFilterData = (data = 0) => {
        setListVisible(false)
        dispatch(setIsContentHidden(false))
        setCity({
            id: data ? data : 0,
            name: data ? iniData.cities.filter(dataCity => dataCity.id === data)[0].name : '',
            country_id: data ? iniData.cities.filter(dataCity => dataCity.id === data)[0].country_id : '',      
        })
    }

    function formatGoogleMapsUrl(url) {
        const regex = /(https?:\/\/www.google.com\/maps\/embed\?pb=[^&]+)/;
        const match = url.match(regex);
        return match ? match[1] : null;
      }

    useEffect(() => {
        if (textAdress !== '' && mapLink !== '' !==null && city) {
            valueGetter({
                city_id: city.id,
                map_url: mapLink,
                adress: textAdress,
                id: iniValue?.id | 99992
            })
        } else {
            valueGetter(null)
        }
    }, [textAdress, mapLink, city])

    const handleAdressChange = (id, value) => {
        switch (id) {
            case 'map_url':
                setMapLink(value)
                break;
        
            case 'adress':
                setTextAdress(value)
                break;
        
            default:
                break;
        }
    }
    return (
        <div className="adress-creator">
            <div className={"adress-creator__cityfilter " + (iniValue !== null ? " _disabled" : '') + (city?.id ? " _active" : "")} onClick={openFilterList}>
                <svg width="14" height="17" viewBox="0 0 14 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M13 6.83333C13 11.8333 7 16 7 16C7 16 1 11.8333 1 6.83333C1 3.61167 3.68629 1 7 1C10.3137 1 13 3.61167 13 6.83333Z" stroke="#E10001" stroke-linecap="round" stroke-linejoin="round"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M9 7C9 8.105 8.105 9 7 9C5.895 9 5 8.105 5 7C5 5.895 5.895 5 7 5C8.105 5 9 5.895 9 7Z" stroke="#E10001" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <span>{city?.id ? tr(city.name) : tr('City')}</span>
            </div>
            <CityFilterWindow
                visible={listVisible}
                updateFilterData={updateFilterData}
                cityData={iniData.cities}
            />
            {adressInputs.map(item => (
                <TextInput
                    placeholder={tr(item.placeholder)}
                    key={item.id}
                    tagFunc={item.id}
                    handleChange={handleAdressChange}
                    iniValue={iniValue ? iniValue[item.id] : null}
                    // iniValue={contacts[item.id] ? contacts[item.id]  : null}
                />
            ))}
            <div className="adress-creator__adressimg">
                <iframe 
                    title={"map_"}
                    src={mapLink} 
                    width="auto" 
                    height="auto"
                    allowFullScreen="" 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade">
                </iframe>
            </div>
            
        </div>
    )
};

export default AdressCreator;
