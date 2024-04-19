import React, { useEffect, useState } from "react"
import PromoList from "../../components/Promo/PromoList";
import bannerImg from '../../assets/img/promos/banner.png'
import PromoListFilter from "../../components/Filters/PromoFilters/PromoListFilter";
import { useDispatch, useSelector } from "react-redux";
import { setListingData, setNullListingData } from "../../store/slices/promos/promosSlice";

const banners = [
    // {banner_id: 1, banner_src: bannerImg, banner_position: 3, banner_title: 'Новогодняя реклама'}
]

const PromosPage = ({
    
}) => {
    const { isContentHidden } = useSelector(state => state.pageMeta)
    const { activeCategoryTag } = useSelector(state => state.filters)
    const { listing: promosData } =  useSelector(state => state.promos)
    const dispatch = useDispatch()

    useEffect(() => {
        setTimeout(() => {
            dispatch(setListingData())
        }, 300);
    }, [])

    useEffect(() => {
        if (activeCategoryTag !== null) {
            dispatch(setNullListingData())
            setTimeout(() => {
                dispatch(setListingData())
            }, 300);
        }
    }, [activeCategoryTag])

    return (
        <div className={"pl-page-container pl-page-listview " + (isContentHidden ? "pl-page-container_hidden" : '')}>
            <PromoListFilter />
            <PromoList promos={promosData} banners={banners} />
        </div>
    )
};

export default PromosPage;
