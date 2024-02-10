import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setSearchAvailable } from '../../store/slices/pageSlice/pageSlice';
import PartnerInputGroup from './Partner/PartnerInputGroup';
import PartnerBio from './Partner/PartnerBio';
import SmartButton from '../../components/UI/SmartButton/SmartButton';
import PartnerLogoLoader from './Partner/PartnerLogoLoader';
import { useNavigate } from 'react-router-dom';
import { PL_APP_ROUTES } from '../../vars/routes';
import { setCompany, setCompanyContacts } from '../../store/slices/user/userSlice';
import { useTranslate } from '../../hooks/useTranslate';

const CreatePartner = () => {
    const dispatch = useDispatch()
    const { tr } = useTranslate()
    const navigate = useNavigate()
    const [companyImg, setCompanyImg] = useState(null)
    const [partnerBio, setPartnerBio] = useState(null)
    const [contacts, setContacts] = useState(null)

    useEffect(() => {
        dispatch(setSearchAvailable(false))
    }, [])
    
    const setImageToCompany = (img) => {
        setCompanyImg(img)
    }
    const setCompanyBio = (bio) => {
        setPartnerBio(bio)
    }
    const updateContacts = (contacts) => {
        setContacts(contacts)
    }
    
    const handleGoToPromoCreate = () => {
        dispatch(setCompany({
            name: partnerBio.name,
            description: partnerBio.description,
            icon: companyImg
        }))
        dispatch(setCompanyContacts(contacts))
        navigate(PL_APP_ROUTES.PARTNER.CREATE_PROMO, {replace: false})
    }

    return (
        <div className={'pl-page-container pl-page-create-partner'}>
            <PartnerLogoLoader changeFunc={setImageToCompany} />
            <PartnerBio changeFunc={setCompanyBio} />
            <PartnerInputGroup updateContacts={updateContacts} />
            <SmartButton 
                color="red"
                onClick={handleGoToPromoCreate}
                disabled={(companyImg === null) || (partnerBio === null || partnerBio === '') ? true : false}
            >{tr('Save')}</SmartButton>
        </div>
    );
};

export default CreatePartner;