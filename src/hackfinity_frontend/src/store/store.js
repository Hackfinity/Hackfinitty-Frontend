import { combineReducers, configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import userSlice from "../components/features/user/userSlice";
import participantSlice from "../components/features/participant/participantSlice";
import hackathonSlice from "../components/features/hackathon/hackathonSlice";
import organizerSlice from "../components/features/organizer/organizerSlice";
import submissionSlice from "../components/features/submission/submissionSlice";
import inviteSlice from "../components/features/invite/inviteSlice";

const persistConfig = {
  key: "root",
  storage,
};

const appReducer = combineReducers({
  user: userSlice,
  participant: participantSlice,
  organizer: organizerSlice,
  hackathon: hackathonSlice,
  submission: submissionSlice,
  invite: inviteSlice,
});

const rootReducer = (state, action) => {
  if (action.type === "USER_LOGOUT") {
    storage.removeItem("persist:root");
    return appReducer(undefined, action);
  }
  return appReducer(state, action);
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== "production",
  // redux-thunk is included by default, so no need to explicitly add it
});

export const persistor = persistStore(store);
