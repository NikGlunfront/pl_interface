import React, { useEffect, useState } from 'react';
import TextInput from '../../../components/UI/Input/TextInput';
import TextArea from '../../../components/UI/Input/TextArea';
import { useDispatch, useSelector } from 'react-redux';
import { setIsContentHidden } from '../../../store/slices/pageSlice/pageSlice';
import CreatePromoImagesUpload from './CreatePromoImagesUpload';
import { useTranslate } from '../../../hooks/useTranslate';
import { useMetaData } from '../../../hooks/useMetaData';
import MultipleAdressPicker from '../../../components/Adress/MultipleAdressPicker';

const CreatePromoFirstStep = ({
    getData,
    isCompletedFirstStep,
    completedData,
}) => {
    const dispatch = useDispatch()
    const { tr } = useTranslate()
    const { getCityName } = useMetaData()
    const { cities } = useSelector(state => state.iniData)
    const partnersCompany = useMetaData().getPartnerCompany()
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [adressList, setAdressList] = useState([])
    const [listVisible, setListVisible] = useState(false)

    useEffect(() => {
        if (completedData.name) {
            setName(completedData.name)
        }
        if (completedData.adresses) {
            setAdressList(completedData.adresses)
        }
        if (completedData.shortDescription) {
            setDescription(completedData.shortDescription)
        }
    }, []) 

    const handleNameChange = (name) => {
        setName(name)
    }

    const handleDescrChange = (descr) => {
        setDescription(descr)
    }

    const updateAdressList = (id, oldState) => {
        let newList = adressList
        if (oldState === true) {
            newList = newList.filter(item => item !== id)
        } else {
            newList = [...newList, id]
        }
        setAdressList(newList)
    }

    const openFilterList = () => {
        setListVisible(true)
        dispatch(setIsContentHidden(true))
    }

    const updateFilterData = (data = 0) => {
        setListVisible(false)
        dispatch(setIsContentHidden(false))
    }

    const getAdressByCityId = (id) => {
        return partnersCompany.adress.filter(item => item.city_id === id)
    }

    const validateFirstStepData = () => {
        if (name === '') {
            return false
        }
        if (description === '') {
            return false
        }

        return true
    }

    useEffect(() => {
        let locationObject = null
        if (adressList.length > 0) {
            console.log(adressList[0])
            const adressObj = partnersCompany.adress.filter(adress => adress.id === adressList[0])
            locationObject = {...adressObj[0]} 
            locationObject.city_name = getCityName(locationObject.city_id)
        }
        getData({
            name: name,
            shortDescription: description,
            addresses: adressList,
            locationObject: locationObject
        })
        isCompletedFirstStep(validateFirstStepData())
        console.log(adressList)
    }, [name, description, adressList])

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
                    <span>{tr('Promo.InfoGroup.Title.Adress')} {adressList.length > 0 ? ` (${adressList.length})` : ''}</span>
                </div>
                <MultipleAdressPicker 
                    activeAdressList={adressList}
                    adressList={partnersCompany.adress}
                    cities={cities}
                    closeList={updateFilterData}
                    listVisible={listVisible}
                    updateAdressList={updateAdressList}
                />
            </div>
        </div>
    );
};

export default CreatePromoFirstStep;