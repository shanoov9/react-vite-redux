import { createStore,combineReducers } from "@reduxjs/toolkit";
import todoReducer from "../features/todo/todoSlice"
import userReducer from "../features/user/userReducer"

const reducers = combineReducers({ todoReducer, userReducer });
export default createStore(reducers);