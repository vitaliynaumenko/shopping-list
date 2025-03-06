import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Item {
  id: string;
  name: string;
  quantity: number;
  category: string;
  purchased: boolean;
}

interface ShoppingListState {
  items: Item[];
}

const loadStateFromLocalStorage = (): ShoppingListState => {
  const data = localStorage.getItem('products');
  return data ? JSON.parse(data) : { items: [] };
}
  

const initialState: ShoppingListState  = loadStateFromLocalStorage()



const shoppingListSlice = createSlice({
    name: 'shoppingList',
    initialState,
    reducers: {
      AddItem: (state, action: PayloadAction<Item>) => {
        state.items.push(action.payload);
      },
    },
  });

export const{AddItem} = shoppingListSlice.actions
export default shoppingListSlice.reducer;
