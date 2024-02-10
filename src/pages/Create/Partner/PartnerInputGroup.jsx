import React, { useEffect, useState } from 'react';
import { useIcons } from '../../../hooks/useIcons';
import TextInput from '../../../components/UI/Input/TextInput';
import { useSelector } from 'react-redux';
import { useTranslate } from '../../../hooks/useTranslate';

const partnerInputs = [
    {id: 'phone', icon: 'phone', placeholder: 'Partner.InputFields.Phone'},
    {id: 'tg', icon: 'tg', placeholder: 'Partner.InputFields.Telegram'},
    {id: 'whatsapp', icon: 'whatsapp', placeholder: 'Partner.InputFields.WhatsApp'},
    {id: 'facebook', icon: 'facebook', placeholder: 'Partner.InputFields.Facebook'},
    {id: 'instagram', icon: 'instagram', placeholder: 'Partner.InputFields.Instagram'},
    {id: 'website', icon: 'website', placeholder: 'Partner.InputFields.Website'},
    {id: 'email', icon: 'email', placeholder: 'Partner.InputFields.Email'},
]

const PartnerInputGroup = ({
    updateContacts
}) => {
    const { tr } = useTranslate()
    const { contacts: contactsState } = useSelector(state => state.user.company)
    const { getIcon } = useIcons()
    const [contacts, setContacts] = useState({})

    useEffect(() => {
        if (contactsState) {
            setContacts(contactsState)
        }
    }, [])
    
    const handleInputsChange = (id, value) => {
        const newContactsObj = {...contacts}
        newContactsObj[id] = value
        setContacts(newContactsObj)
        updateContacts(newContactsObj)
    }
    return (
        <div className='pl-page-create-partner__inputs'>
            <div className='pl-page-create-partner__title'>{tr('Contacts')}</div>
            {partnerInputs.map(item => (
                <TextInput 
                    placeholder={tr(item.placeholder)}
                    icon={getIcon(item.icon)}
                    key={item.id}
                    tagFunc={item.id}
                    handleChange={handleInputsChange}
                    iniValue={contacts[item.id] ? contacts[item.id]  : null}
                />
            ))}
        </div>
    );
};

export default PartnerInputGroup;