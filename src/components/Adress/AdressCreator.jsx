import React, { useEffect, useState } from "react"
import TextInput from "../UI/Input/TextInput";
import { useTranslate } from "../../hooks/useTranslate";
import { useDispatch, useSelector } from "react-redux";
import { setIsContentHidden } from "../../store/slices/pageSlice/pageSlice";
import CityFilterWindow from "../Filters/CityFilter/CityFilterWindow";

const adressInputs = [
    {id: 'adress', icon: null, placeholder: 'Partner.InputFields.Adress'},
    {id: 'googlemaplink', icon: null, placeholder: 'Partner.InputFields.GoogleMapsLink'},
]

const AdressCreator = ({
    valueGetter,
    iniValue
}) => {
    const { tr } = useTranslate()
    const dispatch = useDispatch()
    const iniData = useSelector(state => state.iniData)
    const [city, setCity] = useState(null)
    const [textAdress, setTextAdress] = useState('')
    const [listVisible, setListVisible] = useState(false)
    const [mapLink, setMapLink] = useState('')

    useEffect(() => {
        console.log(iniValue)
        if (iniValue != null) {
            // setCity(iniValue.city_id)
            // setTextAdress(iniValue.adress)
            // setMapLink(iniValue.map_url)
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
            name: data ? iniData.cities.filter(dataCity => dataCity.id == data)[0].name : '',
            country_id: data ? iniData.cities.filter(dataCity => dataCity.id == data)[0].country_id : '',      
        })
    }

    useEffect(() => {
        if (textAdress !== '' && mapLink !== '' && city) {
            valueGetter({
                city: city,
                map_link: mapLink,
                adress: textAdress
            })
        } else {
            valueGetter(null)
        }
    }, [textAdress, mapLink, city])

    const handleAdressChange = (id, value) => {
        switch (id) {
            case 'googlemaplink':
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
            <div className="adress-creator__cityfilter" onClick={openFilterList}>
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
                        // iniValue={contacts[item.id] ? contacts[item.id]  : null}
                    />
                ))}
                <div className="adress-creator__adressimg">
                    <iframe 
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
