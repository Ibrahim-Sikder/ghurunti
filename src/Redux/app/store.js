import { combineReducers, configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  createMigrate,
  createTransform,
} from "redux-persist";
import storageSession from "redux-persist/lib/storage/session";
import { createLogger } from "redux-logger"; // defaults to localStorage
import visaSlice from "../features/visaSlice";
import {
  decryptData,
  deriveAndDecryptKey,
  deriveAndEncryptKey,
  encryptData,
  encryptTransform,
  encryptTransformInstance,
} from "../Encrypt/EncryptionTransform";
import hajjSlice from "../features/hajjSlice";
import umrahSlice from "../features/umrahSlice";
import hotelSlice from "../features/hotelSlice";
import toursSlice from "../features/toursSlice";
import busSlice from "../features/busSlice";
import trainSlice from "../features/trainSlice";
import migrations from "./migrates";
import visaRequirementSlice from "../features/visaRequirementSlice";
import trainConfirmationSlice from "../features/trainConfirmationSlice";
import signUpSlice from "../features/sign-up-slice";
import busConfirmationSlice from "../features/busConfirmationSlice";

const middlewares = [];

if (process.env.NODE_ENV === "development") {
  const logger = createLogger({
    collapsed: true,
  });

  middlewares.push(logger);
}

const rootReducer = combineReducers({
  visa: visaSlice,
  hajj: hajjSlice,
  umrah: umrahSlice,
  hotel: hotelSlice,
  tours: toursSlice,
  bus: busSlice,
  train: trainSlice,
  trainConfirmation: trainConfirmationSlice,
  busConfirmation:  busConfirmationSlice,
  ["visa-rq"]: visaRequirementSlice,
  email: signUpSlice,
});

const persistConfig = {
  key: "root",
  storage: storageSession,
  transforms: [encryptTransform],
  whitelist: [
    "visa",
    "hajj",
    "umrah",
    "hotel",
    "tours",
    "bus",
    "train",
    "visa-rq",
    "trainConfirmation",
    "busConfirmation",
    "email",
  ],
  version: 2, // Update this to the latest version
  migrate: createMigrate(migrations, { debug: true }),
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(middlewares),
});

export const persistor = persistStore(store);
