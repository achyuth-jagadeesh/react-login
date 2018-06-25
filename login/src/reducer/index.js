import {combineReducers}  from "redux";
import userAuthReducer from "./auth/Auth";


let mainreducer = combineReducers({userAuthReducer});
export default mainreducer;