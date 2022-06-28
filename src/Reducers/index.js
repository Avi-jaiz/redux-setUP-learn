import CounterReducer from "./Counter";
import isLoggedReducer from "./isLogged";
import { combineReducers } from "redux";


const allReducers=combineReducers({
    counter:CounterReducer,
    isLogged:isLoggedReducer,
})

export default allReducers;
