import React, { useEffect, useState } from 'react';
import { useIcons } from '../../../hooks/useIcons';
import TextInput from '../../../components/UI/Input/TextInput';
import { useSelector } from 'react-redux';

const partnerInputs = [
    {id: 'phone', icon: 'phone', placeholder: 'Телефон'},
    {id: 'tg', icon: 'tg', placeholder: 'Telegram'},
    {id: 'whatsapp', icon: 'whatsapp', placeholder: 'WhatsApp'},
    {id: 'facebook', icon: 'facebook', placeholder: 'Facebook'},
    {id: 'instagram', icon: 'instagram', placeholder: 'Instagram'},
    {id: 'website', icon: 'website', placeholder: 'Website'},
    {id: 'email', icon: 'email', placeholder: 'Email'},
]

const PartnerInputGroup = ({
    updateContacts
}) => {
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
            <div className='pl-page-create-partner__title'>Контакты</div>
            {partnerInputs.map(item => (
                <TextInput 
                    placeholder={item.placeholder}
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