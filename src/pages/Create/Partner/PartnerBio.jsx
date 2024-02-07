import React, { useEffect, useState } from 'react';
import TextInput from '../../../components/UI/Input/TextInput';
import TextArea from '../../../components/UI/Input/TextArea';
import { useSelector } from 'react-redux';

const partnerBio = [
    {placeholder: 'Имя или название компании'},
    {placeholder: 'О себе'},
]

const PartnerBio = ({
    changeFunc
}) => {
    const { name: compName, description: compDescription } = useSelector(state => state.user.company)
    const [companyName, setCompanyName] = useState(null)
    const [companyDescription, setCompanyDescription] = useState(null)

    const changeCompanyName = (name) => {
        setCompanyName(name)
    }

    const changeCompanyDescription = (descr) => {
        setCompanyDescription(descr)
    }
    
    useEffect(() => {
        changeCompanyName(compName)
        changeCompanyDescription(compDescription)
    }, [])

    useEffect(() => {
        changeFunc({
            name: companyName,
            description: companyDescription
        })
    }, [companyName, companyDescription])

    return (
        <div className='pl-page-create-partner__bio'>
            <TextInput 
                placeholder={"Имя или название компании"}
                handleChange={changeCompanyName}
                iniValue={companyName}
            />
            <TextArea 
                placeholder={"О себе"}
                handleChange={changeCompanyDescription}
                iniValue={companyDescription}
            />
        </div>
    );
};

export default PartnerBio;