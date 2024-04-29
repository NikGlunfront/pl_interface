import React, { useEffect } from "react"
import Footer from "../Common/Footer";
import PromoList from "../../components/Promo/PromoList";
import { useDispatch, useSelector } from "react-redux";
import { setNullWishlistData, setWishlistData } from "../../store/slices/promos/promosSlice";
import SpinLoader from "../../components/UI/SpinLoader/SpinLoader";
import TagFilter from "../../components/UI/TagFilter/TagFilter";
import { setActiveWishlistTag } from "../../store/slices/filters/filtersSlice";
import { useTranslate } from "../../hooks/useTranslate";
import brandMegafon from '../../assets/img/icons/partners/megafon.png'
import brandMts from '../../assets/img/icons/partners/mts.png'
import PromoFilter from "../../components/Filters/PromoFilters/PromoFilter";

const tags = [
    {name: 'Мегафон', value: 'megafon', brandImg: brandMegafon},
    {name: 'МТС', value: 'MTS', brandImg: brandMts},
]

const Wishlist = ({
    
}) => {
    const { tr } = useTranslate()
    const promosData =  useSelector(state => state.promos.wishlist)
    const activeWishlistTag = useSelector(state => state.filters.activeWishlistTag)
    const dispatch = useDispatch()

    useEffect(() => {
        let initialWishlistTag = activeWishlistTag !== null ? activeWishlistTag : 'all'
        dispatch(setActiveWishlistTag(initialWishlistTag))

        if (promosData.length === 0) {
            setTimeout(() => {
                dispatch(setWishlistData())
            }, 300);
        }
    }, [])
    
    useEffect(() => {
        dispatch(setNullWishlistData())
        setTimeout(() => {
            dispatch(setWishlistData())
        }, 300);
    }, [activeWishlistTag])
    
    const handleNewTagFilter = (tagValue) => {
        dispatch(setActiveWishlistTag(tagValue))
    }

    return (
        <div className="pl-page-container pl-page-wishlist">
            <div className="pl-page-wishlist__filters">
                <PromoFilter />
                <div className="pl-page-wishlist__tags no-scroll-visual">
                    <TagFilter 
                        name={tr('TagFilter.Categories.All')}
                        filterValue={'all'} 
                        key={'all'} 
                        changeActiveTag={handleNewTagFilter} 
                        activeTag={activeWishlistTag === 'all'} 
                    />
                    {tags.map(tag => (
                        <TagFilter
                            name={tag.name} 
                            filterValue={tag.value} 
                            key={tag.value} 
                            icon={tag.brandImg}
                            changeActiveTag={handleNewTagFilter} 
                            activeTag={activeWishlistTag === tag.value} 
                        />
                    ))}
                </div>

            </div>
            {/* <Header title="Избранное" /> */}
            {promosData.length > 0 
                ? <PromoList promos={promosData}  />
                : <SpinLoader />
            }
            <Footer />
        </div>
    )
};

export default Wishlist;
