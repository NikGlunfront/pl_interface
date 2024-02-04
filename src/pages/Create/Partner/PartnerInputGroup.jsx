import React from 'react';
import { useIcons } from '../../../hooks/useIcons';
import TextInput from '../../../components/UI/Input/TextInput';

const partnerInputs = [
    {icon: 'phone', placeholder: 'Телефон'},
    {icon: 'tg', placeholder: 'Telegram'},
    {icon: 'whatsapp', placeholder: 'WhatsApp'},
    {icon: 'facebook', placeholder: 'Facebook'},
    {icon: 'instagram', placeholder: 'Instagram'},
    {icon: 'website', placeholder: 'Website'},
    {icon: 'email', placeholder: 'Email'},
]

const PartnerInputGroup = () => {
    const { getIcon } = useIcons()
    return (
        <div className='pl-page-create-partner__inputs'>
            <div className='pl-page-create-partner__title'>Контакты</div>
            {partnerInputs.map(item => (
                <TextInput 
                    placeholder={item.placeholder}
                    icon={getIcon(item.icon)}
                    key={item.placeholder}
                />
            ))}
        </div>
    );
};

export default PartnerInputGroup;