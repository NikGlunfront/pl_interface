import { useDispatch, useSelector } from "react-redux"
import { setActiveTags, setCategories } from "../store/slices/filters/filtersSlice"

export function useCategoryChanger() {
    const app_filters = useSelector(state => state.filters)
    const iniData = useSelector(state => state.iniData)
    const dispatch = useDispatch()

    const setAllCategoriesActive = () => {
        let categories = []
        let tags = {}
        for (let i = 0; i < iniData.categories.length; i++) {
            const catItem = iniData.categories[i];
            categories = [...categories, catItem.id]
            tags = {...tags, [catItem.id]: iniData.tags[catItem.id]}
        }
        dispatch(setCategories(categories))
        dispatch(setActiveTags(tags))
    }

    const removeCategory = (id) => {
        dispatch(setCategories(app_filters.categories.filter(cat => cat !== id)))
        let newTagArr = Object.keys(app_filters.tags).filter(objKey =>
            objKey !== `${id}`).reduce((newObj, key) =>
            {
                newObj[key] = app_filters.tags[key];
                return newObj;
            }, {}
        );
        dispatch(setActiveTags(newTagArr))
    }

    const addCategory = (id) => {
        if (app_filters.categories === null) {
            dispatch(setCategories([id]))
        } else {
            dispatch(setCategories([...app_filters.categories, id]))
        }
        dispatch(setActiveTags({
            ...app_filters.tags,
            [id]: iniData.tags[id]
        }))
    }

    const toggleCategory = (id) => {
        if (app_filters.categories && app_filters.categories?.indexOf(id) !== -1) {
            removeCategory(id)
        } else {
            addCategory(id)
        }
    }

    return {
        setAllCategoriesActive,
        toggleCategory
    }
}