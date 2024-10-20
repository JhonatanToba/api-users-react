import { configureStore } from "@reduxjs/toolkit";
import reducer from "./reducer";

const store = configureStore({
  reducer: {
    apiUsers: reducer
  }
})

export default store;