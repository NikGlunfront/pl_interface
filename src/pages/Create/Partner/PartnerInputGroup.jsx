import React, { useEffect, useState } from 'react';
import { useIcons } from '../../../hooks/useIcons';
import TextInput from '../../../components/UI/Input/TextInput';
import { useSelector } from 'react-redux';
import { useTranslate } from '../../../hooks/useTranslate';
import InfoGroup from '../../../containers/InfoGroup';
import AdressCreator from '../../../components/Adress/AdressCreator';

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
    updatePartnerInputs
}) => {
    const { tr } = useTranslate()
    const { contacts: contactsState, adress: adressState } = useSelector(state => state.user.company)
    const { getIcon } = useIcons()
    const [contacts, setContacts] = useState({})
    const [adressData, setAdressData] = useState(null)

    useEffect(() => {
        if (contactsState !== null) {
            setContacts(contactsState)
        }
        if (adressState.length) {
            setAdressData(adressState)
        }
        updatePartnerInputs({contacts: contactsState, adress: [...adressState, adressState]})
    }, [])

    useEffect(() => {
        updatePartnerInputs({contacts: contacts, adress: [...adressState, adressData]})
    }, [adressData, contacts])
    
    const handleInputsChange = (id, value) => {
        const newContactsObj = {...contacts}
        newContactsObj[id] = value
        setContacts(newContactsObj)
    }
    return (
        <div className='pl-page-create-partner__inputs'>
            <InfoGroup title={tr('Contacts')}>
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
            </InfoGroup>
            <InfoGroup title={tr('Promo.InfoGroup.Title.Adress')}>
                <AdressCreator 
                    valueGetter={setAdressData}
                />
            </InfoGroup>
        </div>
    );
};

export default PartnerInputGroup;