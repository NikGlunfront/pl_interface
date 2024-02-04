import { configureStore } from "@reduxjs/toolkit";
import filtersSlice from "./slices/filters/filtersSlice";
import { paylessApi } from "./services/payless";
import initDataSlice from "./slices/iniData/initDataSlice";
import promosSlice from "./slices/promos/promosSlice";
import pageSlice from "./slices/pageSlice/pageSlice";
import userSlice from "./slices/user/userSlice";

export const store = configureStore({
    reducer: {
        filters: filtersSlice,
        iniData: initDataSlice,
        promos: promosSlice,
        pageMeta: pageSlice,
        user: userSlice
    },
    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware().concat(paylessApi.middleware)
})