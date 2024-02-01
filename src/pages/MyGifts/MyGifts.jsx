import React, { useEffect } from "react"
import Footer from "../Common/Footer";
import PromoList from "../../components/Promo/PromoList";
import TagFilter from "../../components/UI/TagFilter/TagFilter";
import { useDispatch, useSelector } from "react-redux";
import { setMyGiftsData, setNullMyGiftsData } from "../../store/slices/promos/promosSlice";
import SpinLoader from "../../components/UI/SpinLoader/SpinLoader";
import { setActiveMyGiftsTag } from "../../store/slices/filters/filtersSlice";

const tags = [
    {name: 'Ожидают', value: 'waiting'},
    {name: 'Получены', value: 'confirmed'},
    {name: 'Сгорели', value: 'archived'},
]


const MyGifts = ({
    
}) => {
    const promosData = useSelector(state => state.promos.my_gifts)
    const activeMyGiftsTag = useSelector(state => state.filters.activeMyGiftsTag)
    const dispatch = useDispatch()

    useEffect(() => {
        let initMyGiftsTag = activeMyGiftsTag !== null ? activeMyGiftsTag : 'waiting'
        dispatch(setActiveMyGiftsTag(initMyGiftsTag))
        if (promosData.length === 0) {
            setTimeout(() => {
                dispatch(setMyGiftsData())
            }, 300);
        }
    }, [])

    useEffect(() => {
        dispatch(setNullMyGiftsData())
        setTimeout(() => {
            dispatch(setMyGiftsData())
        }, 300);
    }, [activeMyGiftsTag])
    
    const handleNewTagFilter = (tagValue) => {
        dispatch(setActiveMyGiftsTag(tagValue))
    }

    return (
        <div className="pl-page-container pl-page-gifts">
            <div className="pl-page-gifts__tags no-scroll-visual">
                {tags.map(tag => (
                    <TagFilter
                        name={tag.name} 
                        filterValue={tag.value} 
                        key={tag.value} 
                        changeActiveTag={handleNewTagFilter} 
                        activeTag={activeMyGiftsTag === tag.value} 
                    />
                ))}
            </div>
            {promosData.length > 0 
                ? <PromoList promos={promosData}  />
                : <SpinLoader />
            }
            <Footer />
        </div>
    )
};

export default MyGifts;
