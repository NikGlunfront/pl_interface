import React, { useEffect, useState } from "react"
import SmartButton from "../../components/UI/SmartButton/SmartButton";
import CityFilter from "../../components/Filters/CityFilter/CityFilter";
import CategoryFilter from "../../components/Filters/CategoryFilter/CategoryFilter";
import logoImg from '../../assets/img/plless_logo.png';
import giftSvg from '../../assets/img/icons/gift.svg';
import giftSvgDarkTheme from '../../assets/img/icons/gift_white.svg';
import { useSelector } from "react-redux";
import { PL_APP_ROUTES } from "../../vars/routes";
import { useCategoryChanger } from "../../hooks/useCategoryChanger";
import { useNavigate } from "react-router-dom";
import { useTranslate } from "../../hooks/useTranslate";
import { useMetaData } from "../../hooks/useMetaData";
// const {data, error, isLoading} = useGetPokemonByNameQuery('bulbasaur')
// return (
//     <div className="App">
//     {error ? (
//         <>Oh no, there was an error</>
//     ) : isLoading ? (
//         <>Loading...</>
//     ) : data ? (
//         <>
//         <h3>{data.species.name}</h3>
//         <img src={data.sprites.front_shiny} alt={data.species.name} />
//         </>
//     ) : null}
//     </div>
// )

const HomePage = ({
    
}) => {
    const { id: activeCityId } = useSelector(state => state.filters.activeCity)
    const { categories: activeCategories } = useSelector(state => state.filters)
    const { isContentHidden } = useSelector(state => state.pageMeta)
    const {setAllCategoriesActive} = useCategoryChanger()
    const navigate = useNavigate()
    const { handleCreatePromoBtn } = useMetaData()
    const { tr } = useTranslate()
    const isDarkTheme = useSelector(state => state.pageMeta.darkTheme)

    
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false)
        }, 2000);
    }, [])

    const handleGoToPromoClick = () => {
        if (activeCategories === null) {
            setAllCategoriesActive()
        }
        navigate(PL_APP_ROUTES.CLIENT.PROMO_LIST, {replace: false})
    }

    const goToCabinet = () => {
        navigate(PL_APP_ROUTES.PARTNER.ACCOUNT, {replace: false})
    }

    if (isLoading) {
        return (
            <div className="isloadingpage">
                <div className="home-page__logo">
                    <img src={logoImg} alt="PayLess" />
                    <span>PayLess.bot</span>
                </div>
                <div className="pl-app-loader"><span></span></div>
            </div>
        )
    }

    return (
        <div className={'home-page ' + (isContentHidden ? "home-page_hidden" : '')}>
            <div className="home-page__inner">
                <div className="home-page__logo">
                    <img src={logoImg} alt="PayLess" />
                    <span>PayLess.bot</span>
                </div>
                <div className="home-page__text">
                    <p>{tr('Homepage.Promotext.sib_1')}</p>
                    <p>{tr('Homepage.Promotext.sib_2')}</p>
                </div>
                <div className="home-page__filters">
                    <CityFilter 
                        isDarkTheme={isDarkTheme} 
                    />
                    {/* <CategoryFilter
                        isDarkTheme={isDarkTheme}
                    /> */}
                </div>
                <div className="home-page__btns">
                    {/* <SmartButton
                        disabled={activeCityId ? false : true}
                        color="red"
                        number={236}
                        onClick={handleGoToPromoClick}
                        >
                        {tr('Button.ShowGifts')}
                    </SmartButton> */}
                    <SmartButton
                        onClick={handleCreatePromoBtn}
                        icon={isDarkTheme === true ? giftSvgDarkTheme : giftSvg}
                    >
                        {tr('Button.NewGift')}
                    </SmartButton>
                    <div onClick={goToCabinet}>ACCOUNT</div>
                </div>
            </div>
        </div>
    )
};

export default HomePage;
