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
    valueGetter
}) => {
    const { tr } = useTranslate()
    const dispatch = useDispatch()
    const iniData = useSelector(state => state.iniData)
    const [city, setCity] = useState(null)
    const [textAdress, setTextAdress] = useState('')
    const [listVisible, setListVisible] = useState(false)
    const [mapLink, setMapLink] = useState('')

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
            console.log(textAdress, mapLink, city)
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
    // https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d34945.33441969031!2d60.51966905593872!3d56.81020010921794!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x43c16f19ce9d6961%3A0x9fdd3fc86c3eb2f1!2z0KHQstC10YDQtNC70L7QstGB0LrQsNGPINC-0LHQu9Cw0YHRgtC90LDRjyDQutC70LjQvdC40YfQtdGB0LrQsNGPINCx0L7Qu9GM0L3QuNGG0LAg4oSWMQ!5e0!3m2!1sru!2sru!4v1711017618097!5m2!1sru!2sr

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

                <div className="adress-creator__more">{tr('Button.AddAdress')}</div>
            
        </div>
    )
};

export default AdressCreator;
