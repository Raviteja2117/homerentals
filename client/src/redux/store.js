import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./state";

const store=configureStore({reducer:{
    user:userSlice.reducer
}}
  )  
export default store