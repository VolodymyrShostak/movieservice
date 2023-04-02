// import { configureStore } from "@reduxjs/toolkit";
// import { setupListeners } from "@reduxjs/toolkit/query";

// import { movieSlice } from "./movie/movieApiSlice";
// import userApiSlice from "./user/userApiSlice";
// import userReducer from "./user/userSlice";

// export const store = configureStore({
//   reducer: {
//     user: userReducer,
//     [movieSlice.reducerPath]: movieSlice.reducer,
//     [userApiSlice.reducerPath]: userApiSlice.reducer,
//   },
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware().concat(movieSlice.middleware),
// });

// setupListeners(store.dispatch);

import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";

import {
  persistStore,
  persistReducer,
  PERSIST,
  REHYDRATE,
  FLUSH,
  PAUSE,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

import { movieSlice } from "./movie/movieApiSlice";
import userApiSlice from "./user/userApiSlice";
import userReducer from "./user/userSlice";
const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
  movieSlice.middleware,
  userApiSlice.middleware,
];

const userPersistConfig = {
  key: "user",
  storage,
  
};

export const store = configureStore({
  reducer: {
    users: persistReducer(userPersistConfig, userReducer),
    [movieSlice.reducerPath]: movieSlice.reducer,
    [userApiSlice.reducerPath]: userApiSlice.reducer,
  },

  middleware,
});

setupListeners(store.dispatch);

export const persistor = persistStore(store);
