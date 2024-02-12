import React, { useEffect, useState } from 'react';
import TextInput from '../../../components/UI/Input/TextInput';
import TextArea from '../../../components/UI/Input/TextArea';
import { useSelector } from 'react-redux';

const CreatePromoSecondStep = ({
    getData,
    isCompletedSecondStep
}) => {
    const { description: promoDescription } = useSelector(state => state.createPromo)
    const [adress, setAdress] = useState('')
    const [mapLink, setMapLink] = useState('')
    const [descr, setDescr] = useState('')
    
    useEffect(() => {
        if (promoDescription) {
            setDescr(promoDescription)
        }
    }, [])

    const handleAdressChange = (adress) => {
        setAdress(adress)
    }

    const handleMapLinkChange = (mapLink) => {
        setMapLink(mapLink)
    }

    const handleDescrChange = (descr) => {
        setDescr(descr)
    }

    const validateSecondStepData = () => {
        if (descr === '') {
            return false
        }

        return true
    }

    useEffect(() => {
        getData({
            description: descr
        })
        isCompletedSecondStep(validateSecondStepData())
    }, [descr])

    return (
        <div className='step-create-promo'>
            {/* <TextInput 
                placeholder='Адрес'
                handleChange={handleAdressChange}
            />
            <TextInput 
                placeholder='Ссылка'
                handleChange={handleMapLinkChange}
            /> */}
            <TextArea 
                placeholder='Описание'
                handleChange={handleDescrChange}
                iniValue={descr}
            />
        </div>
    );
};

export default CreatePromoSecondStep;