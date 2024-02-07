import React, { useState } from 'react';
import TextInput from '../../../components/UI/Input/TextInput';
import TextArea from '../../../components/UI/Input/TextArea';

const CreatePromoSecondStep = ({

}) => {
    const [adress, setAdress] = useState('')
    const [mapLink, setMapLink] = useState('')
    const [descr, setDescr] = useState('')

    const handleAdressChange = (adress) => {
        setAdress(adress)
    }

    const handleMapLinkChange = (mapLink) => {
        setMapLink(mapLink)
    }

    const handleDescrChange = (descr) => {
        setDescr(descr)
    }

    return (
        <div className='step-create-promo'>
            <TextInput 
                placeholder='Адрес'
                handleChange={handleAdressChange}
            />
            <TextInput 
                placeholder='Ссылка'
                handleChange={handleMapLinkChange}
            />
            <TextArea 
                placeholder='Описание'
                handleChange={handleDescrChange}
            />
        </div>
    );
};

export default CreatePromoSecondStep;