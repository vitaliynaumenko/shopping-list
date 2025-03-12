import { configureStore } from "@reduxjs/toolkit";
import shoppingListReducer from './shoppingListSlice'
import searchQuerySlice from "./searchQuerySlice";
import filterBarSlice from './filterBarSclice'

export const store = configureStore({
    reducer:{
        shoppingList: shoppingListReducer,
        searchBar: searchQuerySlice,
        filterBar: filterBarSlice
    }
}
)
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;