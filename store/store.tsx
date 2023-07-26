import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { Slice } from "./Slice";
import Reducer from "./Reducer";

const store = configureStore({
  reducer: {
    item: Reducer,
    [Slice.reducerPath]: Slice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(Slice.middleware),
});

console.log(store.getState().item);

export default store;
