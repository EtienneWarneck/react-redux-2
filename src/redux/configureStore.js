import { configureStore } from '@reduxjs/toolkit'
import rootReducer from "./reducers";
import reduxImmutableStateInvariant from "redux-immutable-state-invariant";
import thunk from "redux-thunk"

export default function configureAppStore(initialState) {
    const store = configureStore({
        reducer: rootReducer,
        middleware: [reduxImmutableStateInvariant(), thunk],
        enhancers: []
    })
    return store
}