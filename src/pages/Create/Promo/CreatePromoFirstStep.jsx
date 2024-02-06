import React, { useEffect, useState } from 'react';
import TextInput from '../../../components/UI/Input/TextInput';
import TextArea from '../../../components/UI/Input/TextArea';
import CityFilterWindow from '../../../components/Filters/CityFilter/CityFilterWindow';
import { useDispatch, useSelector } from 'react-redux';
import { setIsContentHidden } from '../../../store/slices/pageSlice/pageSlice';
import YesNo from '../../../components/UI/Input/YesNo';

const firstStepInputs = [
    {placeholder: 'Телефон'},
]

const cities = [
    {id: 1, name: 'Москва'},
    {id: 2, name: 'Мумбаи'},
    {id: 3, name: 'Москва'},
]

const CreatePromoFirstStep = ({
    getData
}) => {
    const dispatch = useDispatch()
    const iniData = useSelector(state => state.iniData)
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [locationReference, setLocationReference] = useState('')
    const [city, setCity] = useState(null)
    const [isRemote, setIsRemote] = useState(false)
    const [listVisible, setListVisible] = useState(false)

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

    useEffect(() => {
        getData({
            name: name,
            description: description,
            locationReference: locationReference,
            city: city,
            is_remote: isRemote
        })
    }, [name, description, locationReference, city, isRemote])
    
    return (
        <div className='firststep-create-promo'>
            <TextInput 
                placeholder='Название подарка'
                handleChange={handleNameChange}
            />
            <TextArea 
                placeholder='Короткое описание вашего предложения'
                handleChange={handleDescrChange}
            />
            <div className="firststep-create-promo__city">
                <div className="firststep-create-promo__filter" onClick={openFilterList}>
                    <span>{city?.id ? city.name : 'Город'}</span>
                </div>
                <CityFilterWindow
                    visible={listVisible}
                    updateFilterData={updateFilterData}
                    cityData={iniData.cities}
                />
                <div className='firststep-create-promo__remote'>
                    <YesNo toggleFunc={toggleFunc} isChecked={isRemote} name={'Удаленная работа'} color="#000000" />
                </div>
            </div>
            <TextInput 
                placeholder='Ориентир'
                handleChange={handlelocRefChange}
            />
        </div>
    );
};

export default CreatePromoFirstStep;