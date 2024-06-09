import React, { useEffect, useState } from 'react';
import AccountPromoItem from './AccountPromoItem';
import { useDispatch, useSelector } from 'react-redux';


import item1 from '../../../assets/img/promos/citilink_main.jpg'
import item2 from '../../../assets/img/promos/cum_main.png'
import item3 from '../../../assets/img/promos/item3.png'
import brandMegafon from '../../../assets/img/icons/partners/citilink_logo.jpg'
import brandMts from '../../../assets/img/icons/partners/cum_logo.png'
import brandApple from '../../../assets/img/icons/partners/apple.svg'
import SpinLoader from '../../UI/SpinLoader/SpinLoader';
import TagFilter from '../../UI/TagFilter/TagFilter';
import { useTranslate } from '../../../hooks/useTranslate';
import FilterWindow from '../../UI/SmartSelect/FilterWindow';
import { setIsContentHidden } from '../../../store/slices/pageSlice/pageSlice';
import AccountPromoStats from './components/AccountPromoStats';
import { NavLink } from 'react-router-dom';
export const adresses = [
    {id: 1, city_id: 2, adress: 'metro2 metro2 произвольный адрес - ориентир на карте, чтобы легче было найти место', map_url: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d34945.33441969031!2d60.51966905593872!3d56.81020010921794!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x43c16f19ce9d6961%3A0x9fdd3fc86c3eb2f1!2z0KHQstC10YDQtNC70L7QstGB0LrQsNGPINC-0LHQu9Cw0YHRgtC90LDRjyDQutC70LjQvdC40YfQtdGB0LrQsNGPINCx0L7Qu9GM0L3QuNGG0LAg4oSWMQ!5e0!3m2!1sru!2sru!4v1711017618097!5m2!1sru!2sr'},
    {id: 2, city_id: 1, adress: 'metro3 metro2 произвольный адрес - ориентир на карте, чтобы легче было найти место', map_url: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d34945.33441969031!2d60.51966905593872!3d56.81020010921794!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x43c16f19ce9d6961%3A0x9fdd3fc86c3eb2f1!2z0KHQstC10YDQtNC70L7QstGB0LrQsNGPINC-0LHQu9Cw0YHRgtC90LDRjyDQutC70LjQvdC40YfQtdGB0LrQsNGPINCx0L7Qu9GM0L3QuNGG0LAg4oSWMQ!5e0!3m2!1sru!2sru!4v1711017618097!5m2!1sru!2sr'},
    {id: 3, city_id: 3, adress: 'metro1 metro2 произвольный адрес - ориентир на карте, чтобы легче было найти место', map_url: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d34945.33441969031!2d60.51966905593872!3d56.81020010921794!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x43c16f19ce9d6961%3A0x9fdd3fc86c3eb2f1!2z0KHQstC10YDQtNC70L7QstGB0LrQsNGPINC-0LHQu9Cw0YHRgtC90LDRjyDQutC70LjQvdC40YfQtdGB0LrQsNGPINCx0L7Qu9GM0L3QuNGG0LAg4oSWMQ!5e0!3m2!1sru!2sru!4v1711017618097!5m2!1sru!2sr'},
    {id: 4, city_id: 2, adress: 'metro2 metro2 произвольный адрес - ориентир на карте, чтобы легче было найти место', map_url: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d34945.33441969031!2d60.51966905593872!3d56.81020010921794!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x43c16f19ce9d6961%3A0x9fdd3fc86c3eb2f1!2z0KHQstC10YDQtNC70L7QstGB0LrQsNGPINC-0LHQu9Cw0YHRgtC90LDRjyDQutC70LjQvdC40YfQtdGB0LrQsNGPINCx0L7Qu9GM0L3QuNGG0LAg4oSWMQ!5e0!3m2!1sru!2sru!4v1711017618097!5m2!1sru!2sr'},
    {id: 5, city_id: 1, adress: 'metro3 metro2 произвольный адрес - ориентир на карте, чтобы легче было найти место', map_url: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d34945.33441969031!2d60.51966905593872!3d56.81020010921794!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x43c16f19ce9d6961%3A0x9fdd3fc86c3eb2f1!2z0KHQstC10YDQtNC70L7QstGB0LrQsNGPINC-0LHQu9Cw0YHRgtC90LDRjyDQutC70LjQvdC40YfQtdGB0LrQsNGPINCx0L7Qu9GM0L3QuNGG0LAg4oSWMQ!5e0!3m2!1sru!2sru!4v1711017618097!5m2!1sru!2sr'},
]

const deliveries = {
    list: [3,2,4],
    description: 'СДЕК, Почта России, доставка курьером.'
}
const promos = [
    {id: 6, status: 'A', img: [item3, item3, item3, item3, item3, item3, item3, item3, item3, item3], date_end: null, amount_left: 134, name: 'Apple Watch', description: 'Купи iPhone и получишь <b>Apple Watch в подарок</b>.', location: "Москва, м. Спортивная", acts: {views: 145, scs: 45, wish: 63, not_interest: 5, blocked: 3, ticket: 3}, brand_id: 3, brand_name: "Apple", brand_img: brandApple, brand_contacts: {phone: "79995553333", telegram: "https://tg.me/paymeg", whatsapp: "+79995553333", facebook: "facebook.com", website: "google.com", tg: 'https://t.me/pl_bot'}, brand_role: 'Магазин электроники', adresses: [], delivery: deliveries},
    {id: 1, status: 'P', img: [item1, item1], date_end: null, amount_left: 134, name: 'Телевизор в подарок, второй в подарок', description: '<b>Купи ноутбук</b>, получишь телевизор в подарок. Купи ноутбук, получишь телевизор в подарок. Купи ноутбук, получишь телевизор в подарок. Купи ноутбук, получишь телевизор в подарок.', location: "Москва, м. Спортивная", acts: {views: 145, scs: 45, wish: 63, not_interest: 5, blocked: 3, ticket: 3}, brand_id: 1, brand_name: "Ситилинк", brand_img: brandMegafon, brand_contacts: {phone: "79995553333", telegram: "https://tg.me/paymeg", whatsapp: "+79995553333", facebook: "facebook.com", website: "google.com", tg: 'https://t.me/pl_bot'}, brand_role: 'Магазин электроники', adresses: adresses, delivery: {list: [], description: ''}},
    {id: 2, status: 'P', img: [item2, item2], date_end: '2024-04-23T19:00:00.000Z', amount_left: 56, name: 'Подарочный набор Подарочный набор 12 121 12 12 Подарочный набор  Подарочный набор Подарочный набор Подарочный набор', description: '<b>Купи ноутбук, получишь телевизор в подарок.</b> Купи ноутбук, получишь телевизор в подарок. Купи ноутбук, получишь телевизор в подарок. Купи ноутбук, получишь телевизор в подарок.', location: "Арамболь, Гиркарвада", acts: {views: 145, scs: 45, wish: 63, not_interest: 5, blocked: 3, ticket: 3}, brand_id: 2, brand_name: "ЦУМ", brand_img: brandMts, brand_contacts: {phone: "79995553333", telegram: "https://tg.me/paymeg", whatsapp: "+79995553333", facebook: "facebook.com", website: "google.com", tg: 'https://t.me/pl_bot'}, brand_role: 'Магазин электроники', adresses: adresses, delivery: deliveries},
    {id: 3, status: 'M', img: [item1, item1], date_end: null, amount_left: 134, name: 'Телевизор в подарок, второй в подарок', description: '<b>Купи ноутбук, получишь телевизор в подарок. Купи ноутбук, получишь телевизор в подарок. Купи ноутбук, получишь телевизор в подарок. Купи ноутбук, получишь телевизор в подарок.</b>', location: "Москва, м. Спортивная", acts: {views: 145, scs: 45, wish: 63, not_interest: 5, blocked: 3, ticket: 3}, brand_id: 1, brand_name: "Ситилинк", brand_img: brandMegafon, brand_contacts: {phone: "79995553333", telegram: "https://tg.me/paymeg", whatsapp: "+79995553333", facebook: "facebook.com", website: "google.com", tg: 'https://t.me/pl_bot'}, brand_role: 'Магазин электроники', adresses: adresses, delivery: deliveries},
    {id: 4, status: 'M', img: [item2, item2], date_end: '2024-05-24T19:00:00.000Z', inactive: false, amount_left: 56, name: 'Подарочный набор, второй в подарок', description: 'Купи ноутбук, получишь телевизор в подарок. Купи ноутбук, получишь телевизор в подарок. Купи ноутбук, получишь телевизор в подарок. Купи ноутбук, получишь телевизор в подарок.', location: "Арамболь, Гиркарвада", acts: {views: 145, scs: 45, wish: 63, not_interest: 5, blocked: 3, ticket: 3}, brand_id: 2, brand_name: "ЦУМ", brand_img: brandMts, brand_contacts: {phone: "79995553333", telegram: "https://tg.me/paymeg", whatsapp: "+79995553333", facebook: "facebook.com", website: "google.com", tg: 'https://t.me/pl_bot'}, brand_role: 'Магазин электроники', adresses: adresses, delivery: deliveries},
    {id: 5, status: 'A', img: [item2, item2], date_end: '2024-07-22T19:00:00.000Z', amount_left: 56, name: 'Подарочный набор Подарочный набор 12 121 12 12 Подарочный набор  Подарочный набор Подарочный набор Подарочный набор', description: 'Купи ноутбук, получишь телевизор в подарок. Купи ноутбук, получишь телевизор в подарок. Купи ноутбук, получишь телевизор в подарок. Купи ноутбук, получишь телевизор в подарок.', location: "Арамболь, Гиркарвада", acts: {views: 145, scs: 45, wish: 63, not_interest: 5, blocked: 3, ticket: 3}, brand_id: 1, brand_name: "Ситилинк", brand_img: brandMegafon, brand_contacts: {phone: "79995553333", telegram: "https://tg.me/paymeg", whatsapp: "+79995553333", facebook: "facebook.com", website: "google.com", tg: 'https://t.me/pl_bot'}, brand_role: 'Магазин электроники', adresses: adresses, delivery: deliveries},
]

const promoNav = [
    {id: 1, name: 'Все', counter: 6},
    {id: 2, name: 'Идут показы', counter: 0},
    {id: 3, name: 'На паузе', counter: 6},
    {id: 4, name: 'Архив', counter: 6},
]

const AccountPromos = ({

}) => {
    const { tr } = useTranslate()
    const dispatch = useDispatch()
    const pageMeta = useSelector(state => state.pageMeta)
    const [isLoaded, setIsLoaded] = useState(false)
    const [statsVisible, setStatsVisible] = useState(false)
    const [currentTag, setCurrentTag] = useState(1)
    const [promosList, setPromosList] = useState(promos)

    const closeStatsList = () => {
        setStatsVisible(false)
        setIsContentHidden(false)
    }
    
    const openStatsList = () => {
        setStatsVisible(true)
        setIsContentHidden(true)
    }

    const changeActiveTag = (id) => {
        setCurrentTag(id)
        setIsLoaded(false)
        setTimeout(() => {
            setIsLoaded(true)
        }, 300);
    }

    useEffect(() => {
        setTimeout(() => {
            setIsLoaded(true)
        }, 300);
    }, [])

    return (
        <div className='promos-account'>
            <FilterWindow visible={statsVisible}>
                <div className="pl-return-toppanel">
                    <div className="pl-return-toppanel__return" onClick={closeStatsList}>
                        <svg width="4" height="8" viewBox="0 0 4 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2.45318 3.52858L0 0.666588L0.571371 0L4 4L3.71431 4.33329L0.571371 8L0 7.33341L2.45318 4.47142L2.79387 4L2.45318 3.52858Z" fill={pageMeta.darkTheme ? "white" : "black"} />
                        </svg>
                    </div>
                    <div className="pl-return-toppanel__title">{tr('Статистика')}</div>
                    <div className="pl-return-toppanel__search">
                    </div>
                </div>
                <div className="sidewindow__content">
                    <AccountPromoStats />
                </div>
            </FilterWindow>
            <div className="promos-account__nav">
            <NavLink className="promos-account__addpromo" to={'/create-promo'}><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15 8H1" stroke="black" stroke-linecap="round" stroke-linejoin="round"></path><path d="M8 15V1" stroke="black" stroke-linecap="round" stroke-linejoin="round"></path></svg></NavLink>
                {promoNav.map(item => (
                    <TagFilter 
                        name={tr(item.name)}
                        filterValue={item.id} 
                        key={item.id} 
                        changeActiveTag={changeActiveTag} 
                        activeTag={currentTag === item.id}
                        counter={item.counter}
                    />
                ))}
            </div>
            {isLoaded ?
                promosList.map(promoData => (
                    <AccountPromoItem 
                        promoData={promoData} 
                        key={promoData.id} 
                        openStats={openStatsList}

                    />
                ))

                : <SpinLoader />
            }
        </div>
    );
};

export default AccountPromos;