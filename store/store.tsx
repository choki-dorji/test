import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { Slice } from "./Slice";
import Reducer from "./Reducer";
import Reducer2 from "./Reducer2";
import Reducer3 from "./loginReducer";
const store = configureStore({
  reducer: {
    item: Reducer,
    id: Reducer2,
    login: Reducer3,

    [Slice.reducerPath]: Slice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(Slice.middleware),
});

console.log(store.getState());

export default store;
