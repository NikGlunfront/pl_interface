import React, { useEffect, useState } from 'react';
import TextInput from '../../../components/UI/Input/TextInput';
import TextArea from '../../../components/UI/Input/TextArea';
import CityFilterWindow from '../../../components/Filters/CityFilter/CityFilterWindow';
import { useDispatch, useSelector } from 'react-redux';
import { setIsContentHidden } from '../../../store/slices/pageSlice/pageSlice';
import YesNo from '../../../components/UI/Input/YesNo';
import CreatePromoImagesUpload from './CreatePromoImagesUpload';
import { useTranslate } from '../../../hooks/useTranslate';

const firstStepInputs = [
    {placeholder: 'Телефон'},
]

const cities = [
    {id: 1, name: 'Москва'},
    {id: 2, name: 'Мумбаи'},
    {id: 3, name: 'Москва'},
]

const CreatePromoFirstStep = ({
    getData,
    isCompletedFirstStep,
    completedData,
    step
}) => {
    const dispatch = useDispatch()
    const { tr } = useTranslate()
    const iniData = useSelector(state => state.iniData)
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [locationReference, setLocationReference] = useState('')
    const [city, setCity] = useState(null)
    const [isRemote, setIsRemote] = useState(false)
    const [listVisible, setListVisible] = useState(false)

    useEffect(() => {
        if (completedData.isRemote) {
            setIsRemote(true)
        }
        if (completedData.location) {
            setCity(completedData.location)
        }
        if (completedData.locationRef) {
            setLocationReference(completedData.locationRef)
        }
        if (completedData.name) {
            setName(completedData.name)
        }
        if (completedData.shortDescription) {
            setDescription(completedData.shortDescription)
        }
    }, []) 

    const handleNameChange = (name) => {
        setName(name)
    }

    const handlelocRefChange = (locRef) => {
        setLocationReference(locRef)
    }

    const toggleFunc = () => {
        setIsRemote(!isRemote)
    }

    const handleDescrChange = (descr) => {
        setDescription(descr)
    }

    const openFilterList = () => {
        setListVisible(true)
        dispatch(setIsContentHidden(true))
    }

    const updateFilterData = (data = 0) => {
        setListVisible(false)
        dispatch(setIsContentHidden(false))
        setCity({
            id: data ? data : 0,
            name: data ? iniData.cities.filter(dataCity => dataCity.id == data)[0].name : ''      
        })
    }

    const validateFirstStepData = () => {
        if (name === '') {
            return false
        }
        if (description === '') {
            return false
        }
        if (city === null) {
            return false
        }
        if (locationReference === '' && isRemote === false) {
            return false
        }

        return true
    }

    useEffect(() => {
        const isDataCompleted = name !== '' && description !=='' && locationReference !== '' && city && isRemote ? true : false
        getData({
            name: name,
            shortDescription: description,
            locationReference: locationReference,
            city: city,
            isRemote: isRemote
        })
        isCompletedFirstStep(validateFirstStepData())
    }, [name, description, locationReference, city, isRemote])

    return (
        <div className='firststep-create-promo'>
            <CreatePromoImagesUpload completedImages={completedData.images} />
            <TextInput 
                placeholder={tr('CreatePromo.InputFields.PromoName')}
                handleChange={handleNameChange}
                iniValue={name}
            />
            <TextArea 
                placeholder={tr('CreatePromo.InputFields.ShortDescription')}
                handleChange={handleDescrChange}
                iniValue={description}
            />
            <div className="firststep-create-promo__city">
                <div className="firststep-create-promo__filter" onClick={openFilterList}>
                    <span>{city?.id ? tr(city.name) : tr('City')}</span>
                </div>
                <CityFilterWindow
                    visible={listVisible}
                    updateFilterData={updateFilterData}
                    cityData={iniData.cities}
                />
                <div className='firststep-create-promo__remote'>
                    <YesNo toggleFunc={toggleFunc} isChecked={isRemote} name={tr('CreatePromo.InputFields.RemoteJob')} color="#000000" />
                </div>
            </div>
            <TextInput 
                placeholder={tr('CreatePromo.InputFields.LocationReference')}
                handleChange={handlelocRefChange}
                iniValue={locationReference}
            />
        </div>
    );
};

export default CreatePromoFirstStep;