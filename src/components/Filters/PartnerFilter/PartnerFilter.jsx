import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslate } from '../../../hooks/useTranslate';
import FilterWindow from '../../UI/SmartSelect/FilterWindow';
import brandMegafon from '../../../assets/img/icons/partners/citilink_logo.jpg'
import brandMts from '../../../assets/img/icons/partners/cum_logo.png'
import brandApple from '../../../assets/img/icons/partners/apple.svg'
import Checkbox from '../../UI/Input/Checkbox';
import { setIsContentHidden } from '../../../store/slices/pageSlice/pageSlice';
import ReturnBtn from '../../UI/ReturnBtn/ReturnBtn';

const partnersData = [
    {id: 1, descr: 'Магазин электроники Ситилинк', img: brandMegafon, company: 'Ситилинк'},
    {id: 2, descr: 'Магазин одежды Цум', img: brandMts, company: 'ЦУМ'},
    // {id: 3, descr: 'Магазин Apple электроники', img: brandApple, company: 'Apple'},
]

const PartnerFilter = ({
}) => {
    const iniData = useSelector(state => state.iniData)
    const [listVisible, setListVisible] = useState(false)
    const dispatch = useDispatch()
    const { tr } = useTranslate()
    const [partFilter, setPartFilter] = useState(partnersData)

    const openFilterList = () => {
        setListVisible(true)
        dispatch(setIsContentHidden(true))
    }

    const closeList = () => {
        closeWindow()
    }

    const toggleCat = (id) => {
        // toggleCategory(id)
        if (partFilter.filter(item => item.id === id).length > 0 && partFilter.length > 0) {
            setPartFilter(partFilter.filter(item => item.id !== id))
        } else {
            setPartFilter([...partFilter, ...partnersData.filter(item => item.id === id)])
        }
    }

    useEffect(() => {console.log(partFilter)}, [partFilter])
    
    
    const closeWindow = () => {
        setListVisible(false)
        dispatch(setIsContentHidden(false))
    }

    return (
        <div className=''>
            <div className={"pl-promo-filters__btn "} onClick={openFilterList}></div>
            <FilterWindow visible={listVisible}>
                <div className="pl-return-toppanel">
                    <ReturnBtn onClickFunc={closeList} className={"pl-return-toppanel__return"} />
                    <div className="pl-return-toppanel__title">Фильтр по партнёрам</div>
                </div>
                <div className="filters-pl-select__filters">
                    {partnersData.map(partner => (
                        <Checkbox 
                            name={tr(partner.company)} 
                            id={partner.id}
                            isChecked={partFilter.filter(item => item.id === partner.id).length > 0}
                            amount={40}
                            toggleFunc={toggleCat}
                            key={partner.id}
                            subName={partner.descr}
                            bigImg={partner.img}
                        />
                    ))}
                </div>
            </FilterWindow>
        </div>
    );
};

export default PartnerFilter;