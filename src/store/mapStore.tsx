import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "@redux-saga/core";
import { all, spawn } from "redux-saga/effects";
import { mapReducer, mapWatchSaga } from "./store";

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: mapReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: false,
      serializableCheck: false,
      target: "http://192.168.20.2:8005",
    }).concat(sagaMiddleware),
});

export default function* rootSaga() {
  yield all(mapWatchSaga.map((item: any) => spawn(item)));
}

sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
