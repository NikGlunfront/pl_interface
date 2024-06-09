import React, { useEffect, useRef, useState } from 'react';
import AccountPromoStatItem from './AccountPromoStatItem';
import { useTranslate } from '../../../../hooks/useTranslate';
import { useIcons } from '../../../../hooks/useIcons';
import { useMetaData } from '../../../../hooks/useMetaData';
import Modal from '../../../UI/Modal/Modal';

const AccountPromoStatsGroup = ({
    statsList = [],
    countryId = 1
}) => {
    const modalRef = useRef()
    const [isVisible, setIsVisible] = useState(true)
    const [country, setCountry] = useState(null)
    const { tr } = useTranslate()
    const { getIcon } = useIcons()
    const { getCountryObject } = useMetaData()
    const [scrollTop, setScrollTop] = useState(0)
    const [isSortVisible, setIsSortVisible] = useState(false)

    useEffect(() => {
        setCountry(getCountryObject(countryId))
    }, [countryId])

    const handleToggleContent = () => {
        setIsVisible(!isVisible)
        setScrollTop(0)
    }
    
    const setSortingParam = () => {
        setIsSortVisible(false)
        setScrollTop(0)
    }
    
    const openSortModal = () => {
        setIsSortVisible(true)
        setScrollTop(modalRef.current.closest('.pl-select__filters').scrollTop)
    }

    if (statsList.length === 0 || country === null) {
        return
    }

    return (
        <div className={'stats-promo-group' + (isVisible ? " _visible" : '')}>
            <Modal
                modalRef={modalRef}
                className={'stats-sort-modal'}
                setActive={setIsSortVisible}
                isActive={isSortVisible}
                topGap={scrollTop}
            >
                <div className="stats-sort-modal__list">
                    <ul>
                        <li onClick={setSortingParam}>
                        <svg width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.02247 0.538457C6.16806 0.0694177 6.83194 0.0694189 6.97753 0.538459L8.0204 3.89831C8.08606 4.10984 8.28305 4.25297 8.50452 4.25005L12.0222 4.20363C12.5133 4.19715 12.7184 4.82853 12.3173 5.11194L9.44418 7.14202C9.26329 7.26983 9.18804 7.50142 9.25926 7.71114L10.3904 11.0423C10.5483 11.5073 10.0113 11.8976 9.61778 11.6037L6.7992 9.49848C6.62175 9.36594 6.37825 9.36594 6.2008 9.49848L3.38222 11.6037C2.98874 11.8976 2.45165 11.5073 2.60957 11.0423L3.74074 7.71114C3.81196 7.50142 3.73671 7.26983 3.55582 7.14202L0.682673 5.11194C0.281578 4.82853 0.486729 4.19715 0.977801 4.20363L4.49548 4.25005C4.71695 4.25297 4.91394 4.10984 4.9796 3.89831L6.02247 0.538457Z" fill="#F7AC2A"></path></svg>
                            C отзывами
                        </li>
                        <li onClick={setSortingParam}>
                            <svg width="17" height="15" viewBox="0 0 17 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M8.50013 14C8.50013 14 2.92316 10.4378 1.39232 7.02386C-0.652956 2.46408 5.8347 -1.69632 8.50013 3.20617C11.1656 -1.69632 17.6523 2.46408 15.6079 7.02386C14.0771 10.4378 8.50013 14 8.50013 14Z" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                            Самые популярные
                        </li>
                        <li onClick={setSortingParam}>
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M15 8.77756H1V6.44423C1 5.58478 1.69611 4.88867 2.55555 4.88867H13.4444C14.3039 4.88867 15 5.58478 15 6.44423V8.77756Z" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M11.8865 15H4.10872C2.81994 15 1.77539 13.9555 1.77539 12.6667V8.77783H14.2198V12.6667C14.2198 13.9555 13.1753 15 11.8865 15Z" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M8 4.5V8" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M8 4.88872C8 4.88872 8.85244 1.99462 10.3442 1.24173C12.0048 0.403285 13.6062 1.89817 12.0048 3.39384C11.2037 4.14128 9.60222 4.88872 8 4.88872Z" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M7.99867 4.88872C7.99867 4.88872 7.14622 1.99462 5.65445 1.24173C3.99389 0.403285 2.39245 1.89817 3.99389 3.39384C4.795 4.14128 6.39645 4.88872 7.99867 4.88872Z" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                            Самые эффективные
                        </li>
                        <li onClick={setSortingParam}>
                            <svg width="18" height="11" viewBox="0 0 18 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect x="0.5" y="0.5" width="16.875" height="10" rx="5" stroke="black"/>
                                <circle cx="5.5" cy="5.5" r="3.625" stroke="black"/>
                            </svg>
                            Сейчас неактивны 
                        </li>
                        <li onClick={setSortingParam}>
                            <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8.5 16C4.35786 16 1 12.6421 1 8.5C1 4.35786 4.35786 1 8.5 1C12.6421 1 16 4.35786 16 8.5C16 12.6421 12.6421 16 8.5 16Z" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M3.34375 3.34375L13.6562 13.6562" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                            С отказами
                        </li>
                        <li onClick={setSortingParam}>
                            <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="8.5" cy="8.5" r="7.5" fill="#FF3526" stroke="#FF3526"/>
                                <rect x="4" y="7" width="9" height="3" fill="white"/>
                            </svg>
                            С жалобами
                        </li>
                    </ul>
                </div>
            </Modal>
            <div className="stats-promo-group__title">
                <div className="stats-promo-group__sort" onClick={openSortModal}>
                    <svg width="19" height="11" viewBox="0 0 19 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 5.5H14" stroke="black" strokeLinejoin="round"/>
                        <path d="M0 0.5H19" stroke="black" strokeLinejoin="round"/>
                        <path d="M0 10.5H8" stroke="black" strokeLinejoin="round"/>
                    </svg>
                </div>
                <div className='stats-promo-group__toggler' onClick={handleToggleContent}>
                    <span>
                        <img src={getIcon(`lang-${country.lang_code}`)} alt="" />
                        {tr(country.name)}
                    </span>
                    {statsList.length > 0 &&
                        <div className='stats-promo-group__num'>
                            <svg width="13" height="16" viewBox="0 0 13 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M11.8889 6.44444C11.8889 11.1111 6.44444 15 6.44444 15C6.44444 15 1 11.1111 1 6.44444C1 3.43756 3.43756 1 6.44444 1C9.45133 1 11.8889 3.43756 11.8889 6.44444Z" stroke="#8A8A8A" stroke-linecap="round" stroke-linejoin="round"/>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M7.99978 6.44423C7.99978 7.30367 7.30367 7.99978 6.44423 7.99978C5.58478 7.99978 4.88867 7.30367 4.88867 6.44423C4.88867 5.58478 5.58478 4.88867 6.44423 4.88867C7.30367 4.88867 7.99978 5.58478 7.99978 6.44423Z" stroke="#8A8A8A" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                            {statsList.length > 0 ? statsList.length : ""}
                        </div>
                    }
                </div>
                <div className="stats-promo-group__expandarrow">
                    <svg width="12" height="6" viewBox="0 0 12 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6.70713 2.32023L11.0001 6L12 5.14294L6 0L5.50006 0.428528L0 5.14294L0.999884 6L5.29287 2.32023L6 1.80919L6.70713 2.32023Z" fill="black"/>
                    </svg>
                </div>
            </div>
            <div className="stats-promo-group__list">
                {statsList.map(statItem => (
                    <AccountPromoStatItem 
                        statData={statItem}
                        key={statItem.id}
                    />
                ))}
            </div>
        </div>
    );
};

export default AccountPromoStatsGroup;