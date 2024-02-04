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

    const handleGoToCreate = () => {
        navigate(PL_APP_ROUTES.PARTNER.CREATE_PARTNER, {replace: false})
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
                    <p>Получай и дари подарки.</p>
                    <p>Доброта спасёт мир.</p>
                </div>
                <div className="home-page__filters">
                    <CityFilter 
                        isDarkTheme={isDarkTheme} 
                    />
                    <CategoryFilter
                        isDarkTheme={isDarkTheme}
                    />
                </div>
                <div className="home-page__btns">
                    <SmartButton
                        disabled={activeCityId ? false : true}
                        color="red"
                        number={236}
                        onClick={handleGoToPromoClick}
                        >
                        Показать подарки
                    </SmartButton>
                    <SmartButton
                        onClick={handleGoToCreate}
                        icon={isDarkTheme === true ? giftSvgDarkTheme : giftSvg}
                    >
                        Новый подарок
                    </SmartButton>
                </div>
            </div>
        </div>
    )
};

export default HomePage;
