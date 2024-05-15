import React, { useEffect, useState } from 'react';
import { useIcons } from '../../../hooks/useIcons';
import TextInput from '../../../components/UI/Input/TextInput';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslate } from '../../../hooks/useTranslate';
import InfoGroup from '../../../containers/InfoGroup';
import AdressCreator from '../../../components/Adress/AdressCreator';
import { setIsContentHidden } from '../../../store/slices/pageSlice/pageSlice';
import ManageAdress from '../../../components/Adress/ManageAdress';
import AdressItem from '../../../components/Adress/AdressItem';
import { useTelegram } from '../../../hooks/useTelegram';

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
    const { user } = useTelegram()
    const dispatch = useDispatch()
    const [contacts, setContacts] = useState({})
    const [adressData, setAdressData] = useState([])
    const [listVisible, setListVisible] = useState(false)

    useEffect(() => {
        if (user?.username) {
            setContacts({tg: `https://t.me/${user.username}`})
        }
        if (contactsState !== null) {
            setContacts(contactsState)
        }
        if (adressState?.length > 0) {
            setAdressData(adressState)
        }
        updatePartnerInputs({contacts: contactsState, adress: [...adressState, adressState]})
    }, [])

    
    useEffect(() => {
        updatePartnerInputs({contacts: contacts, adress: adressData})
    }, [adressData, contacts])
    
    const openFilterList = () => {
        setListVisible(true)
        dispatch(setIsContentHidden(true))
    }

    const updateAdressData = (adress) => {
        if (adress !== null) {
            setAdressData([...adressData, adress])
        } else {
            setAdressData(adressData.slice(0, -1))
        }
    }

    const closeList = () => {
        setListVisible(false)
        dispatch(setIsContentHidden(false))
    }

    const manageAdressData = (data) => {
        setAdressData(data)
    }
    
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
            <InfoGroup 
                title={tr('Promo.InfoGroup.Title.Adress')} 
                className={"editable-addresses"}
                subTitleClass={'editable-adresses__amount'}
                subTitleNum={adressData.length}
            >
                {adressData.length <= 1
                    ?
                    <AdressCreator 
                        valueGetter={updateAdressData}
                        iniValue={adressData.length === 0 ? null : adressData[0]}
                    />
                    :
                    <AdressItem 
                        key={adressData[0].id}
                        adress={adressData[0]}
                    />
                }
                <div className="adress-creator__more" onClick={openFilterList}>{tr('Button.EditAddresses')}</div>
                <ManageAdress
                    adressData={adressData}
                    manageAdressData={manageAdressData} 
                    visible={listVisible}
                    closeList={closeList}
                />
            </InfoGroup>
        </div>
    );
};

export default PartnerInputGroup;