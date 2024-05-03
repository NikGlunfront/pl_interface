import React, { useEffect } from "react"
import Footer from "../Common/Footer";
import TagFilter from "../../components/UI/TagFilter/TagFilter";
import { useDispatch, useSelector } from "react-redux";
import { setMyGiftsData, setNullMyGiftsData } from "../../store/slices/promos/promosSlice";
import SpinLoader from "../../components/UI/SpinLoader/SpinLoader";
import { setActiveMyGiftsTag } from "../../store/slices/filters/filtersSlice";
import MyGiftsPromoList from "../../components/Promo/MyGiftsView/MyGiftsPromoList";
import { useTranslate } from "../../hooks/useTranslate";
import { useIcons } from "../../hooks/useIcons";

const tags = [
    {name: 'TagFilter.MyGifts.Waiting', value: 'waiting'},
    {name: 'TagFilter.MyGifts.Recieved', value: 'confirmed'},
]


const MyGifts = ({
    
}) => {
    const { tr } = useTranslate()
    const { getIcon } = useIcons()
    const activeMyGiftsTag = useSelector(state => state.filters.activeMyGiftsTag)
    const dispatch = useDispatch()
    const promosData = useSelector(state => state.promos.my_gifts)

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
                <TagFilter
                    name={tr(tags[0].name)} 
                    filterValue={tags[0].value} 
                    key={tags[0].value} 
                    changeActiveTag={handleNewTagFilter} 
                    activeTag={activeMyGiftsTag === tags[0].value} 
                    icon={activeMyGiftsTag === tags[0].value ? getIcon('waiting_reverse') : getIcon('waiting')}
                    counter={3}
                />
                <TagFilter
                    name={tr(tags[1].name)} 
                    filterValue={tags[1].value} 
                    key={tags[1].value} 
                    changeActiveTag={handleNewTagFilter} 
                    activeTag={activeMyGiftsTag === tags[1].value} 
                    icon={activeMyGiftsTag === tags[1].value ? getIcon('confirmed_reverse') : getIcon('confirmed')}
                    counter={3}
                />
            </div>
            {promosData.length > 0 
                ? <MyGiftsPromoList promos={promosData.map(item => (item.id === 5 ? {...item, deleted: true} : {...item, recieved: true}))}  />
                : <SpinLoader />
            }
            <Footer />
        </div>
    )
};

export default MyGifts;
