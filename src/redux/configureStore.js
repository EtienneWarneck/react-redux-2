import { configureStore } from '@reduxjs/toolkit'
import rootReducer from "./reducers";
import reduxImmutableStateInvariant from "redux-immutable-state-invariant";

export default function configureAppStore(initialState) {
    const store = configureStore({
        reducer: rootReducer,
        middleware: [reduxImmutableStateInvariant()],
        enhancers: []
    })
    return store
}