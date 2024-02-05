import React, { useEffect, useState } from 'react';
import TextInput from '../../../components/UI/Input/TextInput';
import TextArea from '../../../components/UI/Input/TextArea';

const partnerBio = [
    {placeholder: 'Имя или название компании'},
    {placeholder: 'О себе'},
]

const PartnerBio = ({
    changeFunc
}) => {
    const [companyName, setCompanyName] = useState(null)
    useEffect(() => {
        changeFunc(companyName)
    }, [companyName])

    const changeCompanyName = (name) => {
        setCompanyName(name)
    }
    return (
        <div className='pl-page-create-partner__bio'>
            <TextInput 
                placeholder={"Имя или название компании"}
                handleChange={changeCompanyName}
            />
            <TextArea 
                placeholder={"О себе"}
            />
        </div>
    );
};

export default PartnerBio;