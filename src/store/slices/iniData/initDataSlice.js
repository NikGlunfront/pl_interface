import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    cities: [],
    citiesNums: [],
    countries: [],
    categories: [],
    categoriesNums: [],
    tags: [],
    tagsData: [],
    tagsNums: []
}

const countries = [
    {id: 1, name: 'Country.RussianFederation', lang_code: 'ru'},
    {id: 2, name: 'Country.India', lang_code: 'hi'},
    {id: 3, name: 'Country.Thailand', lang_code: 'th'},
]

const citiesData = [
    {id: 1, name: 'City.Mandrem', country_name: 'Country.India', country_id: 2},
    {id: 2, name: 'City.Moscow', country_name: 'Country.RussianFederation', country_id: 1},
    {id: 3, name: 'City.Arambol', country_name: 'Country.India', country_id: 2},
    {id: 4, name: 'City.Samui', country_name: 'Country.Thailand', country_id: 3},
    {id: 5, name: 'City.Mordjim', country_name: 'Country.India', country_id: 2},
    {id: 6, name: 'City.Mumbai', country_name: 'Country.India', country_id: 2},
    {id: 7, name: 'City.SPeterburg', country_name: 'Country.RussianFederation', country_id: 1},
    {id: 8, name: 'City.Ekaterinburg', country_name: 'Country.RussianFederation', country_id: 1},
    {id: 9, name: 'City.Voronezh', country_name: 'Country.RussianFederation', country_id: 1},
    {id: 10, name: 'City.Chelyabinsk', country_name: 'Country.RussianFederation', country_id: 1},
    {id: 11, name: 'City.Tver', country_name: 'Country.RussianFederation', country_id: 1},
]

const cityDataNums = [
    {id: 1, amount: 134},
    {id: 2, amount: 434},
    {id: 3, amount: 23},
    {id: 4, amount: 63},
    {id: 5, amount: 114},
    {id: 6, amount: 252},
    {id: 7, amount: 134},
    {id: 8, amount: 434},
    {id: 9, amount: 23},
    {id: 10, amount: 63},
    {id: 11, amount: 114},
]

const catsData = [
    {id: 1, name: "Category.1"},
    {id: 2, name: "Category.2"},
    {id: 3, name: "Category.3"},
    {id: 4, name: "Category.4"},
    // {id: 5, name: "Category.5"},
]

const tagsData = [
    {id: 1, cat_id: 1, name: 'Category.Tag.1'},
    {id: 2, cat_id: 1, name: 'Category.Tag.2'},
    {id: 3, cat_id: 1, name: 'Category.Tag.3'},
    {id: 4, cat_id: 1, name: 'Category.Tag.4'},
    {id: 5, cat_id: 1, name: 'Category.Tag.5'},
    {id: 6, cat_id: 2, name: 'Category.Tag.6'},
    {id: 7, cat_id: 2, name: 'Category.Tag.7'},
    {id: 8, cat_id: 2, name: 'Category.Tag.8'},
    {id: 9, cat_id: 2, name: 'Category.Tag.9'},
    {id: 10, cat_id: 2, name: 'Category.Tag.10'},
    {id: 11, cat_id: 2, name: 'Category.Tag.11'},
    {id: 12, cat_id: 2, name: 'Category.Tag.12'},
    {id: 13, cat_id: 2, name: 'Category.Tag.13'},
    {id: 14, cat_id: 2, name: 'Category.Tag.14'},
    {id: 15, cat_id: 3, name: 'Category.Tag.15'},
    {id: 16, cat_id: 3, name: 'Category.Tag.16'},
    {id: 17, cat_id: 3, name: 'Category.Tag.17'},
    {id: 18, cat_id: 3, name: 'Category.Tag.18'},
    {id: 19, cat_id: 3, name: 'Category.Tag.19'},
    {id: 20, cat_id: 3, name: 'Category.Tag.20'},
    {id: 21, cat_id: 3, name: 'Category.Tag.21'},
    {id: 22, cat_id: 3, name: 'Category.Tag.22'},
    {id: 23, cat_id: 3, name: 'Category.Tag.23'},
    {id: 24, cat_id: 4, name: 'Category.Tag.24'},
    {id: 25, cat_id: 4, name: 'Category.Tag.25'},
    {id: 26, cat_id: 4, name: 'Category.Tag.26'},
    {id: 27, cat_id: 4, name: 'Category.Tag.27'},
    {id: 28, cat_id: 4, name: 'Category.Tag.28'},
    {id: 29, cat_id: 4, name: 'Category.Tag.29'},
    {id: 30, cat_id: 4, name: 'Category.Tag.30'},
    {id: 31, cat_id: 4, name: 'Category.Tag.31'},
    {id: 32, cat_id: 4, name: 'Category.Tag.32'},
    {id: 33, cat_id: 4, name: 'Category.Tag.33'},
    {id: 34, cat_id: 4, name: 'Category.Tag.34'},
    {id: 35, cat_id: 4, name: 'Category.Tag.35'},
    {id: 36, cat_id: 4, name: 'Category.Tag.36'},
    {id: 37, cat_id: 4, name: 'Category.Tag.37'},
]
const tagsDataNums = [
    {id: 1, amount: 134},
    {id: 2, amount: 434},
    {id: 3, amount: 23},
    {id: 4, amount: 63},
    {id: 5, amount: 114},
    {id: 6, amount: 250},
    {id: 7, amount: 44},
    {id: 8, amount: 134},
    {id: 9, amount: 434},
    {id: 10, amount: 23},
    {id: 11, amount: 63},
    {id: 12, amount: 114},
    {id: 13, amount: 44},
    {id: 14, amount: 134},
    {id: 15, amount: 434},
    {id: 16, amount: 134},
    {id: 17, amount: 434},
    {id: 18, amount: 23},
    {id: 19, amount: 63},
    {id: 20, amount: 114},
    {id: 21, amount: 250},
    {id: 22, amount: 44},
    {id: 23, amount: 134},
    {id: 24, amount: 434},
    {id: 25, amount: 23},
    {id: 26, amount: 63},
    {id: 27, amount: 114},
    {id: 28, amount: 44},
    {id: 29, amount: 134},
    {id: 30, amount: 434}
]

const catsDataNums = [
    {id: 1, amount: 134},
    {id: 2, amount: 434},
    {id: 3, amount: 23},
    {id: 4, amount: 63},
    {id: 5, amount: 114},
    {id: 6, amount: 250},
    {id: 7, amount: 44},
    {id: 8, amount: 134},
    {id: 9, amount: 434},
    {id: 10, amount: 23},
    {id: 11, amount: 63},
    {id: 12, amount: 114},
    {id: 13, amount: 44},
    {id: 14, amount: 134},
    {id: 15, amount: 434}
]

export const initDataSlice = createSlice({
    name: 'iniData',
    initialState,
    reducers: {
        getCities: (state, action) => {
            return {
                ...state,
                cities: [...citiesData],
                countries: [...countries]
            }
        },
        getCats: (state, action) => {
            return {
                ...state,
                categories: [...catsData]
            }
        },
        getCitiesNums: (state, action) => {
            return {
                ...state,
                citiesNums: [...cityDataNums]
            }
        },
        getCatsNums: (state, action) => {
            return {
                ...state,
                categoriesNums: [...catsDataNums]
            }
        },
        getTags: (state, action) => {
            let tagsObj = {}
            tagsData.forEach(tag => {
                if (tagsObj[tag.cat_id]) {
                    tagsObj[tag.cat_id].push(tag.id)
                } else {
                    tagsObj[tag.cat_id] = [tag.id]
                }
            })
            return {
                ...state,
                tags: tagsObj,
                tagsData: [...tagsData]
            }
        },
        getTagsNums: (state, action) => {
            return {
                ...state,
                categoriesNums: [...tagsDataNums]
            }
        },
    }
})

export const {
    getCities,
    getCats,
    getCitiesNums,
    getCatsNums,
    getTags,
    getTagsNums
} = initDataSlice.actions

export default initDataSlice.reducer