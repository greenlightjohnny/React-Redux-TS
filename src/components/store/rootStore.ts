import { createStore, combineReducers } from "redux"

//Import Reducer

export const rootReducer = combineReducers({})

export type AppState = ReturnType<typeof rootReducer>

export const store = createStore(rootReducer)
