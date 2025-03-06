import { legacy_createStore as createStore  } from "redux";
import shoppingListReducer from "./shoppingListReducer"
export const store = createStore(shoppingListReducer)