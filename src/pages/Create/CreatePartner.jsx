import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setSearchAvailable } from '../../store/slices/pageSlice/pageSlice';
import PartnerInputGroup from './Partner/PartnerInputGroup';
import PartnerBio from './Partner/PartnerBio';
import SmartButton from '../../components/UI/SmartButton/SmartButton';

const CreatePartner = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setSearchAvailable(false))
    }, [])


    return (
        <div className={'pl-page-container pl-page-create-partner'}>
            <PartnerBio />
            <PartnerInputGroup />
            <SmartButton 
                
            >Сохранить</SmartButton>
        </div>
    );
};

export default CreatePartner;