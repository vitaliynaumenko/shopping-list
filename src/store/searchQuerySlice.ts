import { createSlice ,PayloadAction} from "@reduxjs/toolkit"

interface ISerchQuery{
    searchQuery: string
}

const initialState:ISerchQuery={
    searchQuery: ''
}

const searchQuerySlice = createSlice({
    name:"search",
    initialState,
    reducers:{
        setQuerySearch: (state, action: PayloadAction<string>)=>{
            state.searchQuery = action.payload
        },
    }
})

export const {setQuerySearch}=searchQuerySlice.actions;
export default searchQuerySlice.reducer;