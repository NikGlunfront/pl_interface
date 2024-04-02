import React, { useEffect, useState } from 'react';
import TextInput from '../../../components/UI/Input/TextInput';
import TextArea from '../../../components/UI/Input/TextArea';
import { useDispatch, useSelector } from 'react-redux';
import { setIsContentHidden } from '../../../store/slices/pageSlice/pageSlice';
import CreatePromoImagesUpload from './CreatePromoImagesUpload';
import { useTranslate } from '../../../hooks/useTranslate';
import { useMetaData } from '../../../hooks/useMetaData';
import MultipleAdressPicker from '../../../components/Adress/MultipleAdressPicker';
import DeliveryFilter from '../../../components/Filters/DeliveryFilter/DeliveryFilter';

const CreatePromoFirstStep = ({
    getData,
    isCompletedFirstStep,
    completedData,
}) => {
    const dispatch = useDispatch()
    const { tr } = useTranslate()
    const { getLocationFromAddress, getLocationFromDeliveryItem } = useMetaData()
    const { cities } = useSelector(state => state.iniData)
    const partnerAddresses = useSelector(state => state.user.company.adress)
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [adressList, setAdressList] = useState([])
    const [deliveryList, setDeliveryList] = useState({list: [], description: ''})
    const [adressListVisible, setAdressListVisible] = useState(false)

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
        setAdressListVisible(true)
        dispatch(setIsContentHidden(true))
    }

    const updateFilterData = (data = 0) => {
        setAdressListVisible(false)
        dispatch(setIsContentHidden(false))
    }

    const getAdressByCityId = (id) => {
        return partnerAddresses.filter(item => item.city_id === id)
    }

    const validateFirstStepData = () => {
        if (name === '') {
            return false
        }
        if (description === '') {
            return false
        }
        if (adressList.length === 0 && deliveryList.list.length === 0) {
            return false
        }

        return true
    }

    useEffect(() => {console.log(deliveryList)}, [deliveryList])

    useEffect(() => {
        let location = ''
        if (adressList.length > 0) {
            location = getLocationFromAddress(partnerAddresses.filter(item => item.id === adressList[0])[0])
        }
        if (adressList.length === 0 && deliveryList.list.length > 0) {
            location = getLocationFromDeliveryItem(deliveryList)
        }
        getData({
            name: name,
            shortDescription: description,
            addresses: adressList,
            location: location,
            delivery: deliveryList
        })
        isCompletedFirstStep(validateFirstStepData())
    }, [name, description, adressList, deliveryList])

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
                    <span>{adressList.length > 0 ? ` (${adressList.length})` : ''} {tr('Promo.InfoGroup.Title.Adress')}</span>
                </div>
                <MultipleAdressPicker 
                    activeAdressList={adressList}
                    adressList={partnerAddresses}
                    cities={cities}
                    closeList={updateFilterData}
                    listVisible={adressListVisible}
                    updateAdressList={updateAdressList}
                />
            </div>
            <DeliveryFilter  callbackDelivery={setDeliveryList} />
        </div>
    );
};

export default CreatePromoFirstStep;