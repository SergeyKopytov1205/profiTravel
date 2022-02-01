import { combineReducers, createStore } from "redux";
import phoneNumbersReducer from "./phoneNumbersReducer";
import programsReducer from "./programsReducer";

const rootReducer = combineReducers({
   taskOne: phoneNumbersReducer,
   programs: programsReducer
})

export const store = createStore(rootReducer)