import { createSlice } from "@reduxjs/toolkit";

const FetchStatusSlice=createSlice({
    name:'Fetch',
    initialState:{
        fetchdone:false,
        currentlyfetching:false
    },
    reducers:{
        markFetching:(state)=>{
            return state.fetchdone=true
        }  ,
        fetchingStarded:(state)=>{
            return state.currentlyfetching=true
        }  ,
        fetchingFinished:(state)=>{
            return state.currentlyfetching=false
        }  
      }
})
export const fetchReducer=FetchStatusSlice.actions
export default FetchStatusSlice