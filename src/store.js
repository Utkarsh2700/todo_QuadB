import { configureStore } from "@reduxjs/toolkit";
import tasksReducer from "./taskSlice";
import rootReducer from "./reducers";
const store = configureStore({
  reducer: rootReducer,
});

export default store;
