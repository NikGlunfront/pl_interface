import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setSearchAvailable } from '../../store/slices/pageSlice/pageSlice';
import PartnerInputGroup from './Partner/PartnerInputGroup';
import PartnerBio from './Partner/PartnerBio';
import SmartButton from '../../components/UI/SmartButton/SmartButton';
import PartnerLogoLoader from './Partner/PartnerLogoLoader';
import { useNavigate } from 'react-router-dom';
import { PL_APP_ROUTES } from '../../vars/routes';
import { setBrand } from '../../store/slices/user/userSlice';

const CreatePartner = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [companyImg, setCompanyImg] = useState(null)
    const [partnerBio, setPartnerBio] = useState(null)

    useEffect(() => {
        dispatch(setSearchAvailable(false))
    }, [])
    
    const setImageToCompany = (img) => {
        setCompanyImg(img)
    }
    const setCompanyBio = (bio) => {
        setPartnerBio(bio)
    }
    const handleGoToPromoCreate = () => {
        dispatch(setBrand({
            name: partnerBio,
            icon: companyImg
        }))
        navigate(PL_APP_ROUTES.PARTNER.CREATE_PROMO, {replace: false})
    }

    useEffect(() => {
        console.log(companyImg, partnerBio)
    }, [companyImg, partnerBio])


    return (
        <div className={'pl-page-container pl-page-create-partner'}>
            <PartnerLogoLoader changeFunc={setImageToCompany} />
            <PartnerBio changeFunc={setCompanyBio} />
            <PartnerInputGroup />
            <SmartButton 
                color="red"
                onClick={handleGoToPromoCreate}
                disabled={(companyImg === null) || (partnerBio === null || partnerBio === '') ? true : false}
            >Сохранить</SmartButton>
        </div>
    );
};

export default CreatePartner;