import React from 'react';
import TextInput from '../../../components/UI/Input/TextInput';
import TextArea from '../../../components/UI/Input/TextArea';

const partnerBio = [
    {placeholder: 'Имя или название компании'},
    {placeholder: 'О себе'},
]

const PartnerBio = () => {
    return (
        <div className='pl-page-create-partner__bio'>
            <TextInput 
                placeholder={"Имя или название компании"}
            />
            <TextArea 
                placeholder={"О себе"}
            />
        </div>
    );
};

export default PartnerBio;