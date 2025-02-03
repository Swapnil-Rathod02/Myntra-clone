import { createSlice } from "@reduxjs/toolkit"


const itemslice=createSlice({
    name:"item",
    initialState:[],
    reducers:{
        additems:(state,action)=>{
            
            return action.payload
        }
    }
})

export const itemAction=itemslice.actions
export default  itemslice