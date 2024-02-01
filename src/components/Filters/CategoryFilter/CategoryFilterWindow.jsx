import React from "react"
import FilterWindow from "../../UI/SmartSelect/FilterWindow";
import Checkbox from "../../UI/Input/Checkbox";
import SmartButton from "../../UI/SmartButton/SmartButton";
import { useSelector } from "react-redux";
import { useCategoryChanger } from "../../../hooks/useCategoryChanger";
import ReturnBtn from "../../UI/ReturnBtn/ReturnBtn";
import { PL_APP_ROUTES } from "../../../vars/routes";
import { useNavigate } from "react-router-dom";

const CategoryFilterWindow = ({
    visible,
    closeWindow
}) => {

    const iniData = useSelector(state => state.iniData)
    const app_filters = useSelector(state => state.filters)
    const catsData = iniData.categories
    const catsDataNums = iniData.categoriesNums
    const activeCity = app_filters.activeCity
    const {toggleCategory} = useCategoryChanger()
    const {setAllCategoriesActive} = useCategoryChanger()
    const navigate = useNavigate()


    const closeList = () => {
        closeWindow()
    }

    const toggleCat = (id) => {
        toggleCategory(id)
    }

    const handleGoToPromoClick = () => {
        if (app_filters.categories === null) {
            setAllCategoriesActive()
        }
        navigate(PL_APP_ROUTES.CLIENT.PROMO_LIST, {replace: false})
    }

    return (
        <FilterWindow visible={visible}>
            <div className="pl-return-toppanel">
                <ReturnBtn onClickFunc={closeList} className={"pl-return-toppanel__return"} />
                <div className="pl-return-toppanel__title">{activeCity.name}</div>
            </div>
            <div className="filters-pl-select__filters">
                {catsData.map(cat => (
                    <Checkbox 
                        name={cat.name} 
                        id={cat.id}
                        isChecked={app_filters.categories && app_filters.categories?.indexOf(cat.id) !== -1 ? true : false}
                        amount={catsDataNums.filter(item => item.id == cat.id)[0].amount}
                        toggleFunc={toggleCat}
                        key={cat.id}
                    />
                ))}
            </div>
            <div className="filters-pl-select__bottom">
                <SmartButton color="red" number={300} onClick={handleGoToPromoClick}>
                    Показать подарки
                </SmartButton>
            </div>
        </FilterWindow>
    )
};

export default CategoryFilterWindow;
