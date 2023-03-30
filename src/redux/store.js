import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";

import { movieSlice } from "./slice/movieSlice";

export const store = configureStore({
  reducer: {
    [movieSlice.reducerPath]: movieSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(movieSlice.middleware),
});

setupListeners(store.dispatch);
