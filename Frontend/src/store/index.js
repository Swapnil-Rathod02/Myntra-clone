import {configureStore} from "@reduxjs/toolkit"
import itemslice from "./AddItem";
import FetchStatusSlice from "./fetchStatus";
import bagSlice from "./bagslice";

const myntraStore=configureStore({
    reducer:{
        item:itemslice.reducer,
        Fetch:FetchStatusSlice.reducer,
        bag:bagSlice.reducer
    }
})

export default myntraStore;