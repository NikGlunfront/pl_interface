import { configureStore } from "@reduxjs/toolkit";
import filtersSlice from "./slices/filters/filtersSlice";
import { paylessApi } from "./services/payless";
import initDataSlice from "./slices/iniData/initDataSlice";
import promosSlice from "./slices/promos/promosSlice";
import pageSlice from "./slices/pageSlice/pageSlice";
import userSlice from "./slices/user/userSlice";
import createPromoSlice from "./slices/createPromo/createPromoSlice";
import accountSlice from "./slices/account/accountSlice";

export const store = configureStore({
    reducer: {
        filters: filtersSlice,
        iniData: initDataSlice,
        promos: promosSlice,
        pageMeta: pageSlice,
        user: userSlice,
        createPromo: createPromoSlice,
        account: accountSlice
    },
    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware().concat(paylessApi.middleware)
})