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
  history: Item[][]
}

const loadStateFromLocalStorage = (): ShoppingListState => {
  const data = localStorage.getItem('products');
  return data ? JSON.parse(data) : { items: [], history: [] };
}
  

const initialState: ShoppingListState = {
  ...loadStateFromLocalStorage(),
  history: []
};



const shoppingListSlice = createSlice({
    name: 'shoppingList',
    initialState,
    reducers: {
      AddItem: (state, action: PayloadAction<Item>) => {
        state.items.push(action.payload);
        state.history.push([...state.items])
      },
      editItem: (state, action: PayloadAction<Item>)=>{
          const index = state.items.findIndex((item)=> item.id === action.payload.id)
          if(index !== -1){
            state.history.push([...state.items])
            state.items[index] = action.payload;
          }
      },
      removeItem: (state, action: PayloadAction<string>)=>{
        state.history.push([...state.items])
        state.items = state.items.filter(item=>item.id !== action.payload)
      },
      togglePurchased: (state, action: PayloadAction<string>)=>{
        const item = state.items.find(item => item.id === action.payload)
        if(item){
          item.purchased = !item.purchased;
        }
      },

      undoLastAction: (state)=>{
        if(state.history.length > 0){
          state.items = state.history.pop()!;
        }
        localStorage.setItem("shoppingList", JSON.stringify(state.items));
      }

    }
  });

export const{AddItem, removeItem, editItem, togglePurchased, undoLastAction} = shoppingListSlice.actions
export default shoppingListSlice.reducer;
