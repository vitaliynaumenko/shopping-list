import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface IFilteredItems {
    category: string,
    purchsad : string
}

const initialState: IFilteredItems = {
    category: '',
    purchsad: ''
}

const filterBarSlice =  createSlice({
   name: 'filteredBar',
   initialState,
   reducers: {
    setCategory: (state, action: PayloadAction<string>)=>{
        state.category = action.payload
    },
    setPurchsad: (state, action:PayloadAction<string>)=>{
        state.purchsad = action.payload
    }
   }
})

export const {setCategory, setPurchsad} = filterBarSlice.actions
export default filterBarSlice.reducer
