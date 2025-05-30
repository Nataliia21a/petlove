import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
// import storage from "redux-persist/lib/storage";
import newsReducer from "./news/slice";
import friendsReducer from "./friends/slice";
import noticesReducer from "./notices/slice";
// import contactsReducer from "./contacts/slice";
// import filtersReducer from "./filters/slice";
// import authReducer from "../redux/auth/slice";

import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

// const authPersistConfig = {
//   key: "auth-token",
//   storage,
//   whitelist: ["token"],
// };

// const persistedAuthReducer = persistReducer(authPersistConfig, authReducer);

export const store = configureStore({
  reducer: {
    // auth: persistedAuthReducer,
    // contacts: contactsReducer,
    news: newsReducer,
    friends: friendsReducer,
    notices: noticesReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
