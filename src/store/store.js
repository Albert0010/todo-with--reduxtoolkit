import {configureStore} from "@reduxjs/toolkit";
import todosReducer from '../features/todos/todosSlice.js'
import inputReducer from '../features/input/inputSlice.js'
export const store = configureStore({
    reducer:{
        todos:todosReducer,
        input:inputReducer
    }
})