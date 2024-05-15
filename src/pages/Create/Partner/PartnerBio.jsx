import React, { useEffect, useState } from 'react';
import TextInput from '../../../components/UI/Input/TextInput';
import TextArea from '../../../components/UI/Input/TextArea';
import { useSelector } from 'react-redux';
import { useTranslate } from '../../../hooks/useTranslate';
import { useTelegram } from '../../../hooks/useTelegram';

const partnerBio = [
    {placeholder: 'Имя или название компании'},
    {placeholder: 'О себе'},
]

const PartnerBio = ({
    changeFunc
}) => {
    const { tr } = useTranslate()
    const { name: compName, description: compDescription } = useSelector(state => state.user.company)
    const [companyName, setCompanyName] = useState(null)
    const [companyDescription, setCompanyDescription] = useState(null)
    const { user } = useTelegram()

    const changeCompanyName = (name) => {
        setCompanyName(name)
    }

    const changeCompanyDescription = (descr) => {
        setCompanyDescription(descr)
    }
    
    useEffect(() => {
        if (user?.username) {
            changeCompanyName(user.username)
        }
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
                placeholder={tr("Partner.InputFields.PartnerName")}
                handleChange={changeCompanyName}
                iniValue={companyName}
            />
            <TextArea 
                placeholder={tr("Partner.InputFields.About")}
                handleChange={changeCompanyDescription}
                iniValue={companyDescription}
            />
        </div>
    );
};

export default PartnerBio;