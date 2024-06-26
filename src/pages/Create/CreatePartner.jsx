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
import { useTelegram } from '../../hooks/useTelegram';
import CreateNav from './CreateNav';

const CreatePartner = () => {
    const dispatch = useDispatch()
    const { tr } = useTranslate()
    const navigate = useNavigate()
    const [companyImg, setCompanyImg] = useState(null)
    const [partnerBio, setPartnerBio] = useState(null)
    const [companyInfo, setCompanyInfo] = useState(null)
    const [isReady, setIsReady] = useState(false)
    const { user, requestContact } = useTelegram()

    useEffect(() => {
        dispatch(setSearchAvailable(false))
        // requestContact()
    }, [])
    
    useEffect(() => {
        let newReadyState = true
        // console.log(companyImg)
        // console.log(partnerBio)
        // console.log(companyInfo)
        if (companyImg === null) {
            newReadyState = false
        }
        if (partnerBio === null || partnerBio.name === '' || partnerBio.description === '') {
            newReadyState = false
        }
        if (companyInfo != null) {
            if (companyInfo.contacts === null) {
                newReadyState = false
            }
            // if (!companyInfo.adress.length > 0) {
            //     newReadyState = false
            // }
        } else {
            newReadyState = false
        }
        console.log(companyInfo)
        setIsReady(newReadyState)
        // console.log(isReady)
    }, [companyImg, partnerBio, companyInfo])

    
    const setImageToCompany = (img) => {
        setCompanyImg(img)
    }
    const setCompanyBio = (bio) => {
        setPartnerBio(bio)
    }
    const updateCompanyInfo = (companyInfo) => {
        setCompanyInfo(companyInfo)
    }
    
    const handleGoToPromoCreate = () => {
        dispatch(setCompany({
            name: partnerBio.name,
            description: partnerBio.description,
            icon: companyImg,
            contacts: companyInfo.contacts,
            adress: companyInfo.adress
        }))
        navigate(PL_APP_ROUTES.PARTNER.CREATE_PROMO, {replace: false})
    }

    return (
        <div className={'pl-page-container pl-page-create-partner'}>
            <CreateNav step={0} />
            <PartnerLogoLoader changeFunc={setImageToCompany} />
            <PartnerBio changeFunc={setCompanyBio} />
            <PartnerInputGroup updatePartnerInputs={updateCompanyInfo} />
            {/* <pre className='debug_panel'>
                {JSON.stringify(user, undefined, 1)}
            </pre> */}
            <div className="filters-pl-select__bottom">
                <SmartButton 
                    color="red"
                    onClick={handleGoToPromoCreate}
                    disabled={!isReady}
                >{tr('Далее')}</SmartButton>
            </div>
        </div>
    );
};

export default CreatePartner;