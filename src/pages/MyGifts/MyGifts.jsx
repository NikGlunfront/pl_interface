import React, { useEffect } from "react"
import Footer from "../Common/Footer";
import TagFilter from "../../components/UI/TagFilter/TagFilter";
import { useDispatch, useSelector } from "react-redux";
import { setMyGiftsData, setNullMyGiftsData } from "../../store/slices/promos/promosSlice";
import SpinLoader from "../../components/UI/SpinLoader/SpinLoader";
import { setActiveMyGiftsTag } from "../../store/slices/filters/filtersSlice";
import MyGiftsPromoList from "../../components/Promo/MyGiftsView/MyGiftsPromoList";
import { useTranslate } from "../../hooks/useTranslate";

const tags = [
    {name: 'TagFilter.MyGifts.Waiting', value: 'waiting'},
    {name: 'TagFilter.MyGifts.Recieved', value: 'confirmed'},
]


const MyGifts = ({
    
}) => {
    const { tr } = useTranslate()
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
                        name={tr(tag.name)} 
                        filterValue={tag.value} 
                        key={tag.value} 
                        changeActiveTag={handleNewTagFilter} 
                        activeTag={activeMyGiftsTag === tag.value} 
                    />
                ))}
            </div>
            {promosData.length > 0 
                ? <MyGiftsPromoList promos={promosData}  />
                : <SpinLoader />
            }
            <Footer />
        </div>
    )
};

export default MyGifts;
