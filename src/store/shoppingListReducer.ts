interface Item {
    id: string,
    name:string,
    quantity: number,
    category: string,
    purchased: boolean
}

interface ShoppingState{
    items: Item[]
}

const initialState: ShoppingState={
    items:[]
}

const shoppingListReducer =( state=initialState, action:any)=>{

    switch(action.type){
        case "ADD_ITEM":
            return {...state, items:[...state.items, action.payload]}
        default:
            return state

    }

}
export default shoppingListReducer;